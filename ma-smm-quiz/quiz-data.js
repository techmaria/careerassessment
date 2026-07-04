const quizData = {
  "quiz": {
    "quiz_id": "quiz_ma_vs_smm_v1",
    "slug": "marketing-automation-vs-smm-fit-quiz",
    "title": "Marketing Automation vs SMM Fit Quiz",
    "description": "A quiz for beginner and aspiring VAs to determine whether they are a better fit for Marketing Automation or Social Media Management.",
    "target_audience": "beginner_va",
    "version": "v1",
    "status": "published"
  },
  "sections": [
    { "section_id": "sec_work_style", "section_key": "work_style_fit", "section_title": "Work Style Fit", "section_order": 1, "weight_max": 25 },
    { "section_id": "sec_transferable_skills", "section_key": "transferable_skills", "section_title": "Transferable Skills", "section_order": 2, "weight_max": 25 },
    { "section_id": "sec_task_preference", "section_key": "task_preference", "section_title": "Task Preference", "section_order": 3, "weight_max": 20 },
    { "section_id": "sec_learning_tolerance", "section_key": "learning_tool_tolerance", "section_title": "Learning / Tool Tolerance", "section_order": 4, "weight_max": 15 },
    { "section_id": "sec_readiness", "section_key": "exposure_readiness", "section_title": "Exposure / Readiness", "section_order": 5, "weight_max": 15 }
  ],
  "questions": [
    {
      "question_id": "q01", "quiz_id": "quiz_ma_vs_smm_v1", "section_id": "sec_work_style",
      "question_code": "Q01", "question_text": "Which type of work environment feels more natural to you?",
      "question_order": 1, "question_type": "single_select", "is_required": true,
      "choices": [
        { "choice_id": "q01_a", "choice_key": "A", "choice_text": "Structured systems, checklists, and step-by-step workflows", "display_order": 1, "score_ma": 5, "score_smm": 1 },
        { "choice_id": "q01_b", "choice_key": "B", "choice_text": "Mostly structured, but with some room for creativity", "display_order": 2, "score_ma": 4, "score_smm": 2 },
        { "choice_id": "q01_c", "choice_key": "C", "choice_text": "I'm comfortable with either depending on the task", "display_order": 3, "score_ma": 3, "score_smm": 3 },
        { "choice_id": "q01_d", "choice_key": "D", "choice_text": "A creative environment with changing tasks and content ideas", "display_order": 4, "score_ma": 2, "score_smm": 4 },
        { "choice_id": "q01_e", "choice_key": "E", "choice_text": "Fast-moving creative work, communication, and content execution", "display_order": 5, "score_ma": 1, "score_smm": 5 }
      ]
    },
    {
      "question_id": "q02", "quiz_id": "quiz_ma_vs_smm_v1", "section_id": "sec_work_style",
      "question_code": "Q02", "question_text": "If a client gives you a project, which role sounds more appealing?",
      "question_order": 2, "question_type": "single_select", "is_required": true,
      "choices": [
        { "choice_id": "q02_a", "choice_key": "A", "choice_text": "Organize the backend system, workflow, and follow-up process", "display_order": 1, "score_ma": 5, "score_smm": 1 },
        { "choice_id": "q02_b", "choice_key": "B", "choice_text": "Build the process and keep operations organized", "display_order": 2, "score_ma": 4, "score_smm": 2 },
        { "choice_id": "q02_c", "choice_key": "C", "choice_text": "I'd be okay doing either backend setup or content support", "display_order": 3, "score_ma": 3, "score_smm": 3 },
        { "choice_id": "q02_d", "choice_key": "D", "choice_text": "Help with brand content and posting support", "display_order": 4, "score_ma": 2, "score_smm": 4 },
        { "choice_id": "q02_e", "choice_key": "E", "choice_text": "Handle content planning, captions, posting, and engagement", "display_order": 5, "score_ma": 1, "score_smm": 5 }
      ]
    },
    {
      "question_id": "q03", "quiz_id": "quiz_ma_vs_smm_v1", "section_id": "sec_work_style",
      "question_code": "Q03", "question_text": "Which statement sounds most like you?",
      "question_order": 3, "question_type": "single_select", "is_required": true,
      "choices": [
        { "choice_id": "q03_a", "choice_key": "A", "choice_text": "I like organizing moving parts so things run smoothly behind the scenes", "display_order": 1, "score_ma": 5, "score_smm": 1 },
        { "choice_id": "q03_b", "choice_key": "B", "choice_text": "I prefer organized operational work over public-facing creative work", "display_order": 2, "score_ma": 4, "score_smm": 2 },
        { "choice_id": "q03_c", "choice_key": "C", "choice_text": "I can work either behind the scenes or on visible content tasks", "display_order": 3, "score_ma": 3, "score_smm": 3 },
        { "choice_id": "q03_d", "choice_key": "D", "choice_text": "I enjoy work that involves messaging, content, and audience communication", "display_order": 4, "score_ma": 2, "score_smm": 4 },
        { "choice_id": "q03_e", "choice_key": "E", "choice_text": "I'm energized by branding, content ideas, and social media presence", "display_order": 5, "score_ma": 1, "score_smm": 5 }
      ]
    },
    {
      "question_id": "q04", "quiz_id": "quiz_ma_vs_smm_v1", "section_id": "sec_work_style",
      "question_code": "Q04", "question_text": "Which type of problem would you rather solve?",
      "question_order": 4, "question_type": "single_select", "is_required": true,
      "choices": [
        { "choice_id": "q04_a", "choice_key": "A", "choice_text": "Why isn't the workflow, form, or follow-up system working correctly?", "display_order": 1, "score_ma": 5, "score_smm": 1 },
        { "choice_id": "q04_b", "choice_key": "B", "choice_text": "How can we make this process cleaner and more efficient?", "display_order": 2, "score_ma": 4, "score_smm": 2 },
        { "choice_id": "q04_c", "choice_key": "C", "choice_text": "Either process issues or content issues are fine with me", "display_order": 3, "score_ma": 3, "score_smm": 3 },
        { "choice_id": "q04_d", "choice_key": "D", "choice_text": "How can we improve post performance and engagement?", "display_order": 4, "score_ma": 2, "score_smm": 4 },
        { "choice_id": "q04_e", "choice_key": "E", "choice_text": "What content should we create and how should we present it?", "display_order": 5, "score_ma": 1, "score_smm": 5 }
      ]
    },
    {
      "question_id": "q05", "quiz_id": "quiz_ma_vs_smm_v1", "section_id": "sec_work_style",
      "question_code": "Q05", "question_text": "Which daily work style sounds more sustainable for you long-term?",
      "question_order": 5, "question_type": "single_select", "is_required": true,
      "choices": [
        { "choice_id": "q05_a", "choice_key": "A", "choice_text": "Repeating, optimizing, and documenting systems/processes", "display_order": 1, "score_ma": 5, "score_smm": 1 },
        { "choice_id": "q05_b", "choice_key": "B", "choice_text": "Organized support work with clear workflows and deliverables", "display_order": 2, "score_ma": 4, "score_smm": 2 },
        { "choice_id": "q05_c", "choice_key": "C", "choice_text": "A mix of process work and creative execution", "display_order": 3, "score_ma": 3, "score_smm": 3 },
        { "choice_id": "q05_d", "choice_key": "D", "choice_text": "Content support with some planning and communication", "display_order": 4, "score_ma": 2, "score_smm": 4 },
        { "choice_id": "q05_e", "choice_key": "E", "choice_text": "Constant content creation, posting cycles, and engagement tasks", "display_order": 5, "score_ma": 1, "score_smm": 5 }
      ]
    },
    {
      "question_id": "q06", "quiz_id": "quiz_ma_vs_smm_v1", "section_id": "sec_transferable_skills",
      "question_code": "Q06", "question_text": "Which type of past experience sounds closest to your strengths?",
      "question_order": 6, "question_type": "single_select", "is_required": true,
      "choices": [
        { "choice_id": "q06_a", "choice_key": "A", "choice_text": "Admin support, tracking, records, scheduling, and follow-up", "display_order": 1, "score_ma": 5, "score_smm": 1 },
        { "choice_id": "q06_b", "choice_key": "B", "choice_text": "Organized support work with spreadsheets and process coordination", "display_order": 2, "score_ma": 4, "score_smm": 2 },
        { "choice_id": "q06_c", "choice_key": "C", "choice_text": "I've done a mix of admin, communication, and support tasks", "display_order": 3, "score_ma": 3, "score_smm": 3 },
        { "choice_id": "q06_d", "choice_key": "D", "choice_text": "Communication-heavy tasks, announcements, page support, or content help", "display_order": 4, "score_ma": 2, "score_smm": 4 },
        { "choice_id": "q06_e", "choice_key": "E", "choice_text": "Social posting, content creation, or community engagement", "display_order": 5, "score_ma": 1, "score_smm": 5 }
      ]
    },
    {
      "question_id": "q07", "quiz_id": "quiz_ma_vs_smm_v1", "section_id": "sec_transferable_skills",
      "question_code": "Q07", "question_text": "When working on a project, which skill do you trust in yourself the most?",
      "question_order": 7, "question_type": "single_select", "is_required": true,
      "choices": [
        { "choice_id": "q07_a", "choice_key": "A", "choice_text": "Keeping systems organized and making sure nothing gets missed", "display_order": 1, "score_ma": 5, "score_smm": 1 },
        { "choice_id": "q07_b", "choice_key": "B", "choice_text": "Creating structure, documentation, and clean execution", "display_order": 2, "score_ma": 4, "score_smm": 2 },
        { "choice_id": "q07_c", "choice_key": "C", "choice_text": "I'm equally comfortable with organization and communication", "display_order": 3, "score_ma": 3, "score_smm": 3 },
        { "choice_id": "q07_d", "choice_key": "D", "choice_text": "Writing, presenting, or communicating ideas clearly", "display_order": 4, "score_ma": 2, "score_smm": 4 },
        { "choice_id": "q07_e", "choice_key": "E", "choice_text": "Creating content, messaging, and social communication", "display_order": 5, "score_ma": 1, "score_smm": 5 }
      ]
    },
    {
      "question_id": "q08", "quiz_id": "quiz_ma_vs_smm_v1", "section_id": "sec_transferable_skills",
      "question_code": "Q08", "question_text": "Which tool/task background sounds most like your real experience so far?",
      "question_order": 8, "question_type": "single_select", "is_required": true,
      "choices": [
        { "choice_id": "q08_a", "choice_key": "A", "choice_text": "Spreadsheets, tracking sheets, records, admin workflows, data organization", "display_order": 1, "score_ma": 5, "score_smm": 1 },
        { "choice_id": "q08_b", "choice_key": "B", "choice_text": "Documentation, process checklists, calendar coordination, follow-up tasks", "display_order": 2, "score_ma": 4, "score_smm": 2 },
        { "choice_id": "q08_c", "choice_key": "C", "choice_text": "Basic exposure to both organization tools and content tools", "display_order": 3, "score_ma": 3, "score_smm": 3 },
        { "choice_id": "q08_d", "choice_key": "D", "choice_text": "Canva, page posting, writing captions, or social scheduling", "display_order": 4, "score_ma": 2, "score_smm": 4 },
        { "choice_id": "q08_e", "choice_key": "E", "choice_text": "Managing social pages, content calendars, and engagement tasks", "display_order": 5, "score_ma": 1, "score_smm": 5 }
      ]
    },
    {
      "question_id": "q09", "quiz_id": "quiz_ma_vs_smm_v1", "section_id": "sec_transferable_skills",
      "question_code": "Q09", "question_text": "In school, church, org, or volunteer work, what role would you most likely end up doing?",
      "question_order": 9, "question_type": "single_select", "is_required": true,
      "choices": [
        { "choice_id": "q09_a", "choice_key": "A", "choice_text": "Logistics, documentation, records, coordination, and process support", "display_order": 1, "score_ma": 5, "score_smm": 1 },
        { "choice_id": "q09_b", "choice_key": "B", "choice_text": "Scheduling, organizing tasks, and making sure things are tracked properly", "display_order": 2, "score_ma": 4, "score_smm": 2 },
        { "choice_id": "q09_c", "choice_key": "C", "choice_text": "I could handle either backend support or communications support", "display_order": 3, "score_ma": 3, "score_smm": 3 },
        { "choice_id": "q09_d", "choice_key": "D", "choice_text": "Promotions, announcements, page updates, or content help", "display_order": 4, "score_ma": 2, "score_smm": 4 },
        { "choice_id": "q09_e", "choice_key": "E", "choice_text": "Publicity, content creation, social posting, or engagement", "display_order": 5, "score_ma": 1, "score_smm": 5 }
      ]
    },
    {
      "question_id": "q10", "quiz_id": "quiz_ma_vs_smm_v1", "section_id": "sec_transferable_skills",
      "question_code": "Q10", "question_text": "Which compliment do people give you more often?",
      "question_order": 10, "question_type": "single_select", "is_required": true,
      "choices": [
        { "choice_id": "q10_a", "choice_key": "A", "choice_text": "You're very organized and systematic.", "display_order": 1, "score_ma": 5, "score_smm": 1 },
        { "choice_id": "q10_b", "choice_key": "B", "choice_text": "You keep things on track and make work easier to manage.", "display_order": 2, "score_ma": 4, "score_smm": 2 },
        { "choice_id": "q10_c", "choice_key": "C", "choice_text": "You're both organized and easy to work with.", "display_order": 3, "score_ma": 3, "score_smm": 3 },
        { "choice_id": "q10_d", "choice_key": "D", "choice_text": "You explain things well and communicate clearly.", "display_order": 4, "score_ma": 2, "score_smm": 4 },
        { "choice_id": "q10_e", "choice_key": "E", "choice_text": "You're creative and good at content/social communication.", "display_order": 5, "score_ma": 1, "score_smm": 5 }
      ]
    },
    {
      "question_id": "q11", "quiz_id": "quiz_ma_vs_smm_v1", "section_id": "sec_task_preference",
      "question_code": "Q11", "question_text": "If you had to choose one task to do for 2 hours, which would you pick?",
      "question_order": 11, "question_type": "single_select", "is_required": true,
      "choices": [
        { "choice_id": "q11_a", "choice_key": "A", "choice_text": "Clean up a CRM or organize a client tracking system", "display_order": 1, "score_ma": 5, "score_smm": 0 },
        { "choice_id": "q11_b", "choice_key": "B", "choice_text": "Build or improve a follow-up workflow/checklist", "display_order": 2, "score_ma": 4, "score_smm": 1 },
        { "choice_id": "q11_c", "choice_key": "C", "choice_text": "Either one is fine depending on the client's goal", "display_order": 3, "score_ma": 3, "score_smm": 3 },
        { "choice_id": "q11_d", "choice_key": "D", "choice_text": "Draft captions and schedule social posts", "display_order": 4, "score_ma": 1, "score_smm": 4 },
        { "choice_id": "q11_e", "choice_key": "E", "choice_text": "Plan a week of content ideas for a brand", "display_order": 5, "score_ma": 0, "score_smm": 5 }
      ]
    },
    {
      "question_id": "q12", "quiz_id": "quiz_ma_vs_smm_v1", "section_id": "sec_task_preference",
      "question_code": "Q12", "question_text": "Which weekly responsibility sounds more satisfying?",
      "question_order": 12, "question_type": "single_select", "is_required": true,
      "choices": [
        { "choice_id": "q12_a", "choice_key": "A", "choice_text": "Making sure leads, forms, reminders, and backend steps run correctly", "display_order": 1, "score_ma": 5, "score_smm": 0 },
        { "choice_id": "q12_b", "choice_key": "B", "choice_text": "Supporting client operations through process and system organization", "display_order": 2, "score_ma": 4, "score_smm": 1 },
        { "choice_id": "q12_c", "choice_key": "C", "choice_text": "A mix of operations support and content support", "display_order": 3, "score_ma": 3, "score_smm": 3 },
        { "choice_id": "q12_d", "choice_key": "D", "choice_text": "Managing a posting calendar and content flow", "display_order": 4, "score_ma": 1, "score_smm": 4 },
        { "choice_id": "q12_e", "choice_key": "E", "choice_text": "Helping grow a page through content and engagement", "display_order": 5, "score_ma": 0, "score_smm": 5 }
      ]
    },
    {
      "question_id": "q13", "quiz_id": "quiz_ma_vs_smm_v1", "section_id": "sec_task_preference",
      "question_code": "Q13", "question_text": "Which type of finished work would make you feel more accomplished?",
      "question_order": 13, "question_type": "single_select", "is_required": true,
      "choices": [
        { "choice_id": "q13_a", "choice_key": "A", "choice_text": "A workflow that saves time and keeps follow-up consistent", "display_order": 1, "score_ma": 5, "score_smm": 0 },
        { "choice_id": "q13_b", "choice_key": "B", "choice_text": "A clean, organized backend system that makes operations smoother", "display_order": 2, "score_ma": 4, "score_smm": 1 },
        { "choice_id": "q13_c", "choice_key": "C", "choice_text": "Either a smoother system or better content performance", "display_order": 3, "score_ma": 3, "score_smm": 3 },
        { "choice_id": "q13_d", "choice_key": "D", "choice_text": "A polished content calendar with strong captions and posting consistency", "display_order": 4, "score_ma": 1, "score_smm": 4 },
        { "choice_id": "q13_e", "choice_key": "E", "choice_text": "A brand page with engaging content and visible audience activity", "display_order": 5, "score_ma": 0, "score_smm": 5 }
      ]
    },
    {
      "question_id": "q14", "quiz_id": "quiz_ma_vs_smm_v1", "section_id": "sec_task_preference",
      "question_code": "Q14", "question_text": "If a client asked where you'd like to help first, what would you choose?",
      "question_order": 14, "question_type": "single_select", "is_required": true,
      "choices": [
        { "choice_id": "q14_a", "choice_key": "A", "choice_text": "Backend workflows, follow-up process, CRM, or automation support", "display_order": 1, "score_ma": 5, "score_smm": 0 },
        { "choice_id": "q14_b", "choice_key": "B", "choice_text": "Organizing operations, client data, and internal systems", "display_order": 2, "score_ma": 4, "score_smm": 1 },
        { "choice_id": "q14_c", "choice_key": "C", "choice_text": "I'd like to support both backend and social tasks at first", "display_order": 3, "score_ma": 3, "score_smm": 3 },
        { "choice_id": "q14_d", "choice_key": "D", "choice_text": "Content planning, post scheduling, and page management", "display_order": 4, "score_ma": 1, "score_smm": 4 },
        { "choice_id": "q14_e", "choice_key": "E", "choice_text": "Social strategy, content support, and audience engagement", "display_order": 5, "score_ma": 0, "score_smm": 5 }
      ]
    },
    {
      "question_id": "q15", "quiz_id": "quiz_ma_vs_smm_v1", "section_id": "sec_learning_tolerance",
      "question_code": "Q15", "question_text": "Which type of tool learning sounds more tolerable to you?",
      "question_order": 15, "question_type": "single_select", "is_required": true,
      "choices": [
        { "choice_id": "q15_a", "choice_key": "A", "choice_text": "Learning workflows, automations, CRMs, tags, triggers, and backend systems", "display_order": 1, "score_ma": 5, "score_smm": 1 },
        { "choice_id": "q15_b", "choice_key": "B", "choice_text": "Learning operational tools and process-based platforms step by step", "display_order": 2, "score_ma": 4, "score_smm": 2 },
        { "choice_id": "q15_c", "choice_key": "C", "choice_text": "I'm open to learning either technical systems or content tools", "display_order": 3, "score_ma": 3, "score_smm": 3 },
        { "choice_id": "q15_d", "choice_key": "D", "choice_text": "Learning content scheduling, design, and social platform tools", "display_order": 4, "score_ma": 2, "score_smm": 4 },
        { "choice_id": "q15_e", "choice_key": "E", "choice_text": "Learning content tools, social media platforms, and audience-focused workflows", "display_order": 5, "score_ma": 1, "score_smm": 5 }
      ]
    },
    {
      "question_id": "q16", "quiz_id": "quiz_ma_vs_smm_v1", "section_id": "sec_learning_tolerance",
      "question_code": "Q16", "question_text": "If something goes wrong in the work, which challenge would you rather handle?",
      "question_order": 16, "question_type": "single_select", "is_required": true,
      "choices": [
        { "choice_id": "q16_a", "choice_key": "A", "choice_text": "Debug why a form, reminder, or workflow didn't trigger correctly", "display_order": 1, "score_ma": 5, "score_smm": 1 },
        { "choice_id": "q16_b", "choice_key": "B", "choice_text": "Review a backend process and fix the broken step", "display_order": 2, "score_ma": 4, "score_smm": 2 },
        { "choice_id": "q16_c", "choice_key": "C", "choice_text": "I can handle either backend issues or content adjustments", "display_order": 3, "score_ma": 3, "score_smm": 3 },
        { "choice_id": "q16_d", "choice_key": "D", "choice_text": "Adjust weak captions, posting strategy, or content presentation", "display_order": 4, "score_ma": 2, "score_smm": 4 },
        { "choice_id": "q16_e", "choice_key": "E", "choice_text": "Improve social content performance and engagement response", "display_order": 5, "score_ma": 1, "score_smm": 5 }
      ]
    },
    {
      "question_id": "q17", "quiz_id": "quiz_ma_vs_smm_v1", "section_id": "sec_learning_tolerance",
      "question_code": "Q17", "question_text": "Which learning curve are you more willing to commit to for the next 3–6 months?",
      "question_order": 17, "question_type": "single_select", "is_required": true,
      "choices": [
        { "choice_id": "q17_a", "choice_key": "A", "choice_text": "Systems, automations, email flows, CRM logic, and process optimization", "display_order": 1, "score_ma": 5, "score_smm": 1 },
        { "choice_id": "q17_b", "choice_key": "B", "choice_text": "Operational systems and backend client support tools", "display_order": 2, "score_ma": 4, "score_smm": 2 },
        { "choice_id": "q17_c", "choice_key": "C", "choice_text": "I'm willing to explore both before specializing", "display_order": 3, "score_ma": 3, "score_smm": 3 },
        { "choice_id": "q17_d", "choice_key": "D", "choice_text": "Content systems, posting workflows, and audience-facing marketing tasks", "display_order": 4, "score_ma": 2, "score_smm": 4 },
        { "choice_id": "q17_e", "choice_key": "E", "choice_text": "Content creation, social page growth, and social media execution", "display_order": 5, "score_ma": 1, "score_smm": 5 }
      ]
    },
    {
      "question_id": "q18", "quiz_id": "quiz_ma_vs_smm_v1", "section_id": "sec_readiness",
      "question_code": "Q18", "question_text": "Which of these have you actually done before, even in a basic way?",
      "question_order": 18, "question_type": "single_select", "is_required": true,
      "choices": [
        { "choice_id": "q18_a", "choice_key": "A", "choice_text": "Managed records, trackers, follow-up sheets, or structured client/admin workflows", "display_order": 1, "score_ma": 5, "score_smm": 1 },
        { "choice_id": "q18_b", "choice_key": "B", "choice_text": "Organized processes, reminders, schedules, or internal support tasks", "display_order": 2, "score_ma": 4, "score_smm": 2 },
        { "choice_id": "q18_c", "choice_key": "C", "choice_text": "A bit of both admin/process work and social/content tasks", "display_order": 3, "score_ma": 3, "score_smm": 3 },
        { "choice_id": "q18_d", "choice_key": "D", "choice_text": "Created posts, captions, page updates, or basic social scheduling", "display_order": 4, "score_ma": 2, "score_smm": 4 },
        { "choice_id": "q18_e", "choice_key": "E", "choice_text": "Managed a page/account or handled consistent content support", "display_order": 5, "score_ma": 1, "score_smm": 5 }
      ]
    },
    {
      "question_id": "q19", "quiz_id": "quiz_ma_vs_smm_v1", "section_id": "sec_readiness",
      "question_code": "Q19", "question_text": "If someone asked you to start a beginner service next month, which would feel more realistic with your current ability?",
      "question_order": 19, "question_type": "single_select", "is_required": true,
      "choices": [
        { "choice_id": "q19_a", "choice_key": "A", "choice_text": "CRM cleanup, lead tracking, follow-up support, or backend organization", "display_order": 1, "score_ma": 5, "score_smm": 1 },
        { "choice_id": "q19_b", "choice_key": "B", "choice_text": "Admin + process support that could grow into automation support later", "display_order": 2, "score_ma": 4, "score_smm": 2 },
        { "choice_id": "q19_c", "choice_key": "C", "choice_text": "I could probably start with either if given a clear SOP", "display_order": 3, "score_ma": 3, "score_smm": 3 },
        { "choice_id": "q19_d", "choice_key": "D", "choice_text": "Content scheduling, caption support, and page management", "display_order": 4, "score_ma": 2, "score_smm": 4 },
        { "choice_id": "q19_e", "choice_key": "E", "choice_text": "Social media support and content execution", "display_order": 5, "score_ma": 1, "score_smm": 5 }
      ]
    },
    {
      "question_id": "q20", "quiz_id": "quiz_ma_vs_smm_v1", "section_id": "sec_readiness",
      "question_code": "Q20", "question_text": "Which statement best describes your current stage?",
      "question_order": 20, "question_type": "single_select", "is_required": true,
      "choices": [
        { "choice_id": "q20_a", "choice_key": "A", "choice_text": "I already lean toward systems/process work and want to build backend skills", "display_order": 1, "score_ma": 5, "score_smm": 1 },
        { "choice_id": "q20_b", "choice_key": "B", "choice_text": "I'm more comfortable with organized support work than creative content work", "display_order": 2, "score_ma": 4, "score_smm": 2 },
        { "choice_id": "q20_c", "choice_key": "C", "choice_text": "I'm still exploring and could go either direction", "display_order": 3, "score_ma": 3, "score_smm": 3 },
        { "choice_id": "q20_d", "choice_key": "D", "choice_text": "I'm more comfortable with communication/content than systems work", "display_order": 4, "score_ma": 2, "score_smm": 4 },
        { "choice_id": "q20_e", "choice_key": "E", "choice_text": "I already lean toward social media/content support work", "display_order": 5, "score_ma": 1, "score_smm": 5 }
      ]
    }
  ]
};
