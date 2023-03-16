// export const prerender = true;
export const ssr = false;

import prisma from '$lib/server/prismadb';
import { error, fail } from '@sveltejs/kit';
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

export const load = async ({params}) => {
  let quiz = null
  let action = "view"
  let urlSplit = params.url.split('/')

  if (urlSplit[1] == "edit" || (urlSplit.length == 1 && urlSplit[0] != "create")) {
    quiz = await prisma.quizzes.findUnique({
      where: {
        id: urlSplit[0]
      },
      include: {
        passages: {
          include: {
            group_questions: {
              include: {
                image: true,
                questions: {
                  include: {
                    answer: true,
                  }
                }
              }
            }
          }
        }
      }
    })

    if (!quiz) throw error(404, 'page not found');

    action = urlSplit.length == 1 ? "view" : "edit"
  }
  else if (urlSplit[0] == "create") {
    quiz = { passages: [] }
    action = "create"
  }
  else throw error(404, 'page not found')

  return { quiz, action }
}

export const actions = {
	createOrUpdate: async ({ request }) => {
		const data = await request.formData()
    let id = data.get('id') as string
    let title = data.get('title') as string
    let slug = data.get('slug') as string
    let passages = JSON.parse(data.get('passages') as string || '[]')
    let action = data.get('action') as string

    if (action != "edit" && action != "create") return

    if (!title) {
      fail(400, {title, slug, passages, error: 'Title is required'})
    }

    if (!slug) {
      slug = slugify(title, '_')
    }

    try {
      if (action == "create") {
        let passage_data_create = passages.map((v,i) => {
          return {
            title: 'passage ' + i,
            content: v.content,
            group_questions: {
              create: v.group_questions.map((v2,i2) => {
                return {
                  title: GROUP_QUESTION.find(a => v2.type == a.type).label || "Group question",
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
                            answer_name: v3.answer.answer_name
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
      }
      else {
        const quiz = await prisma.quizzes.update({
          where: {
            id: id
          },
          data: {
            title,
            slug,
            work_time: new Date(60*60*1000), // one hourse
            passages: passages
          }
        })

        const transaction = await prisma.$transaction(
          let passage_data_update = passages.map((v,i) => {
            return {
              where: {
                id: v.id
              },
              data: {
                title: 'passage ' + i,
                content: v.content, 
                group_questions: {
                  update: v.group_questions.map((v2,i2) => {
                    return {
                      where: {
                        id: v2.id,
                      },
                      data: {
                        title: v2.title || GROUP_QUESTION.find(a => v2.type == a.type).label || "Group question",
                        type: v2.type,
                        image_id: v2.image_id,
                        options: v2.options,
                        questions: {
                          update: v2.questions.map((v3,i3) => {
                            return {
                              where: {
                                id: v3.id,
                              },
                              data: {
                                question_name: v3.question_name || '',
                                option_a: v3.option_a || '',
                                option_b: v3.option_b || '',
                                option_c: v3.option_c || '',
                                option_d: v3.option_d || '',
                                answer: {
                                  update: {
                                    where: {
                                      id: v3.answer.id,
                                    },
                                    data: {
                                      answer_name: v3.answer.answer_name
                                    }
                                  }
                                }
                              }
                            }
                          })
                        }
                      }
                    }
                  })
                }
              }
            }
          })
          tagIds.map((tagId) =>
            client.tag.update({
              where: { id: parseInt(tagId) },
              data: { files: { create: { fileId } } },
            })
          )
        );
      }

      return { message: 'Mission Completed' }
    } 
    catch (error) {
      console.log(error)
      fail(400, {title, slug, passages, error: 'Server error'})
    }
	},
  delete: async ({request}) => {
    const data = await request.formData()
    let id = data.get('id') as string

    try {
      const quiz = await prisma.quizzes.delete({
        where: {
          id
        }
      })

      return { message: 'Mission Completed' }
    } catch (error) {
      fail(400, {error: 'Server error'})
    }
  }
};