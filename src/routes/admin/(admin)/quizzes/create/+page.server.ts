// export const prerender = true;
export const ssr = false;

import prisma from '$lib/server/prismadb';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import slugify from "slugify";

const GROUP_QUESTION = [
  {type: 'diagram',label: 'Diagram Label Completion'},
  {type: 'true-false',label: 'True / False / Not given'},
  {type: 'short',label: 'Short Answer'},
  {type: 'single',label: 'Single Answer'},
  {type: 'summary',label: 'Summary, Note Completion With Hint'},
  {type: 'yes-no',label: 'Yes / No / Not Given'},
  {type: 'matching',label: 'Matching Heading'}
]

export const actions: Actions = {
	create: async ({ request }) => {
		const data = await request.formData()
    let title = data.get('title') as string
    let slug = data.get('slug') as string
    let passages = JSON.parse(data.get('passages') as string || '[]')

    if (!title) {
      fail(400, {title, slug, passages, error: 'Title is required'})
    }

    if (!slug) {
      slug = slugify(title, '_')
    }

    let passage_data_create = passages.map((v,i) => {
      return {
        title: 'passage ' + i,
        content: v.content,
        group_questions: {
          create: v.group_questions.map((v2,i2) => {
            return {
              title: GROUP_QUESTION.find(a => v2.type == a.type).label ?? "Group question",
              type: v2.type,
              image: v2.image,
              options: v2.options,
              questions: {
                create: v2.questions.map((v3,i3) => {
                  return {
                    question_name: v3.question_name || '',
                    option_a: v3.option_a || '',
                    option_b: v3.option_b || '',
                    option_c: v3.option_c || '',
                    option_d: v3.option_d || '',
                    answer: {
                      create: {
                        answer_name: v3.answer
                      }
                    }
                  }
                })
              }
            }
          })
        }
      }
    })

    try {
      const quiz = await prisma.quizzes.create({
        data: {
          title,
          slug,
          work_time: new Date(60*60*1000), // one hourse
          passages: {
            create: passage_data_create
          }
        }
      })

      return { message: 'Mission Completed' }
    } 
    catch (error) {
      console.log(error)
      fail(400, {title, slug, passages, error: 'Server error'})
    }
	}
};