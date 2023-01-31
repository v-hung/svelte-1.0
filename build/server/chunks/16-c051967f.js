import { p as prisma } from './prismadb-a6fac679.js';
import { f as fail } from './index2-e4abb57b.js';
import slugify from 'slugify';
import '@prisma/client';

const ssr = false;
const GROUP_QUESTION = [
  { type: "diagram", label: "Diagram Label Completion" },
  { type: "true-false", label: "True / False / Not given" },
  { type: "short", label: "Short Answer" },
  { type: "single", label: "Single Answer" },
  { type: "summary", label: "Summary, Note Completion With Hint" },
  { type: "yes-no", label: "Yes / No / Not Given" },
  { type: "matching", label: "Matching Heading" }
];
const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    let title = data.get("title");
    let slug = data.get("slug");
    let passages = JSON.parse(data.get("passages") || "[]");
    if (!title) {
      fail(400, { title, slug, passages, error: "Title is required" });
    }
    if (!slug) {
      slug = slugify(title, "_");
    }
    let passage_data_create = passages.map((v, i) => {
      return {
        title: "passage " + i,
        content: v.content,
        group_questions: {
          create: v.group_questions.map((v2, i2) => {
            return {
              title: GROUP_QUESTION.find((a) => v2.type == a.type).label ?? "Group question",
              type: v2.type,
              image: v2.image,
              options: v2.options,
              questions: {
                create: v2.questions.map((v3, i3) => {
                  return {
                    question_name: v3.question_name || "",
                    option_a: v3.option_a || "",
                    option_b: v3.option_b || "",
                    option_c: v3.option_c || "",
                    option_d: v3.option_d || "",
                    answer: {
                      create: {
                        answer_name: v3.answer
                      }
                    }
                  };
                })
              }
            };
          })
        }
      };
    });
    try {
      const quiz = await prisma.quizzes.create({
        data: {
          title,
          slug,
          work_time: new Date(60 * 60 * 1e3),
          passages: {
            create: passage_data_create
          }
        }
      });
      return { message: "Mission Completed" };
    } catch (error) {
      console.log(error);
      fail(400, { title, slug, passages, error: "Server error" });
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  ssr: ssr
});

const index = 16;
const component = async () => (await import('./_page.svelte-6a177c7a.js')).default;
const file = '_app/immutable/components/pages/dashboard/quizzes/create/_page.svelte-c5e1a6b3.js';
const imports = ["_app/immutable/components/pages/dashboard/quizzes/create/_page.svelte-c5e1a6b3.js","_app/immutable/chunks/index-4e57025e.js","_app/immutable/chunks/navigation-bc9b83dc.js","_app/immutable/chunks/singletons-94e6fee4.js","_app/immutable/chunks/stores-a933c578.js","_app/immutable/chunks/index-a96d6802.js","_app/immutable/chunks/text-90f8117b.js","_app/immutable/chunks/forms-b0cb80c2.js","_app/immutable/chunks/parse-f0c618df.js"];
const stylesheets = ["_app/immutable/assets/_page-f0075ea3.css","_app/immutable/assets/text-75daf976.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=16-c051967f.js.map
