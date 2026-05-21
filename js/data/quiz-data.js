const QUIZ_DATA = [
  {
    q: "Scrum được sáng lập dựa trên nền tảng gì?",
    opts: ["Lean thinking và chủ nghĩa thực nghiệm (empiricism)", "Waterfall methodology và agile manifesto", "Kanban và Extreme Programming", "Project management và risk analysis"],
    ans: 0,
    explain: "Scrum Guide 2020 khẳng định: 'Scrum is founded on empiricism and lean thinking.' Empiricism = tri thức đến từ kinh nghiệm; Lean = giảm waste, tập trung essentials."
  },
  {
    q: "Ba trụ cột thực nghiệm (empirical pillars) của Scrum là gì?",
    opts: ["Transparency, Inspection, Adaptation", "Plan, Do, Check", "Requirements, Design, Implementation", "Vision, Strategy, Execution"],
    ans: 0,
    explain: "3 trụ cột: Transparency (minh bạch) → Inspection (kiểm tra) → Adaptation (thích ứng). Theo thứ tự tiên quyết."
  },
  {
    q: "5 giá trị Scrum (Scrum Values) gồm những gì?",
    opts: ["Commitment, Focus, Openness, Respect, Courage", "Trust, Transparency, Teamwork, Quality, Speed", "Communication, Simplicity, Feedback, Respect, Courage", "Honesty, Integrity, Quality, Speed, Fun"],
    ans: 0,
    explain: "5 giá trị Scrum: Commitment (cam kết), Focus (tập trung), Openness (cởi mở), Respect (tôn trọng), Courage (can đảm)."
  },
  {
    q: "Scrum Team bao gồm những ai?",
    opts: ["Product Owner, Scrum Master, Developers", "Product Owner, Scrum Master, Developers, Stakeholders", "Product Owner, Project Manager, Developers", "Product Owner, Scrum Master, Developers, Testers"],
    ans: 0,
    explain: "Scrum Team = 1 PO + 1 SM + Developers. Không có sub-teams hay hierarchies. Stakeholders ở ngoài Scrum Team."
  },
  {
    q: "Quy mô tối ưu của Scrum Team là bao nhiêu người?",
    opts: ["10 hoặc ít hơn", "5-9 người", "3-9 người", "Không giới hạn"],
    ans: 0,
    explain: "Scrum Guide: 'typically 10 or fewer people.' Nếu quá lớn → tái cấu trúc thành nhiều Scrum Teams nhỏ hơn."
  },
  {
    q: "Ai chịu trách nhiệm tối đa hoá giá trị của sản phẩm?",
    opts: ["Product Owner", "Scrum Master", "Developers", "Toàn bộ Scrum Team"],
    ans: 0,
    explain: "PO is accountable for maximizing the value of the product resulting from the work of the Scrum Team."
  },
  {
    q: "Product Owner có thể uỷ quyền việc quản lý Product Backlog không?",
    opts: ["Có, nhưng PO vẫn là người chịu trách nhiệm (accountable)", "Không, PO phải tự làm mọi thứ", "Có, và trách nhiệm chuyển sang người được uỷ quyền", "Chỉ khi được Scrum Master cho phép"],
    ans: 0,
    explain: "The PO may do the above work or may delegate the responsibility to others. Regardless, the PO remains accountable."
  },
  {
    q: "Product Owner là một người hay một hội đồng?",
    opts: ["Một người (one person, not a committee)", "Một hội đồng đại diện stakeholders", "Tuỳ tổ chức quyết định", "Một nhóm 2-3 người"],
    ans: 0,
    explain: "Scrum Guide rõ ràng: 'The Product Owner is one person, not a committee.' PO có thể đại diện nhu cầu nhiều stakeholders trong PB."
  },
  {
    q: "Ai có quyền huỷ Sprint?",
    opts: ["Chỉ Product Owner", "Scrum Master", "Toàn bộ Scrum Team", "Stakeholders"],
    ans: 0,
    explain: "Only the Product Owner has the authority to cancel the Sprint — khi Sprint Goal becomes obsolete."
  },
  {
    q: "Sprint có thể bị huỷ khi nào?",
    opts: ["Khi Sprint Goal trở nên lỗi thời (obsolete)", "Khi team không kịp hoàn thành công việc", "Khi stakeholders thay đổi yêu cầu", "Khi có bug nghiêm trọng"],
    ans: 0,
    explain: "A Sprint could be cancelled if the Sprint Goal becomes obsolete. Chỉ PO có quyền huỷ."
  },
  {
    q: "Sprint Planning có timebox tối đa bao lâu cho Sprint 1 tháng?",
    opts: ["8 giờ", "4 giờ", "2 giờ", "Không giới hạn"],
    ans: 0,
    explain: "Sprint Planning is timeboxed to a maximum of eight hours for a one-month Sprint."
  },
  {
    q: "Sprint Planning đề cập mấy chủ đề (topics)?",
    opts: ["3 chủ đề: Why, What, How", "2 chủ đề: What, How", "4 chủ đề: Why, What, How, When", "1 chủ đề: What"],
    ans: 0,
    explain: "Topic 1: Why is this Sprint valuable? (Sprint Goal) — Topic 2: What can be Done? (chọn PBIs) — Topic 3: How will the work get done?"
  },
  {
    q: "Ai tham gia Sprint Planning?",
    opts: ["Toàn bộ Scrum Team (có thể mời thêm người)", "Chỉ Developers", "Product Owner và Developers", "Scrum Master và Developers"],
    ans: 0,
    explain: "This resulting plan is created by the collaborative work of the entire Scrum Team. Scrum Team may also invite other people."
  },
  {
    q: "Sprint Goal phải được hoàn tất khi nào?",
    opts: ["Trước khi kết thúc Sprint Planning", "Trong Daily Scrum đầu tiên", "Trong 24 giờ đầu Sprint", "Bất kỳ lúc nào trong Sprint"],
    ans: 0,
    explain: "The Sprint Goal must be finalized prior to the end of Sprint Planning."
  },
  {
    q: "Daily Scrum dành cho ai?",
    opts: ["Developers", "Toàn bộ Scrum Team", "Scrum Master và Developers", "Bất kỳ ai muốn tham dự"],
    ans: 0,
    explain: "The Daily Scrum is a 15-minute event for the Developers. PO/SM tham gia với tư cách Developers nếu đang làm Sprint Backlog items."
  },
  {
    q: "Timebox của Daily Scrum?",
    opts: ["15 phút", "30 phút", "Tuỳ Developers quyết định", "Không quá 1 giờ"],
    ans: 0,
    explain: "The Daily Scrum is a 15-minute event. Cùng giờ, cùng địa điểm mỗi ngày để giảm complexity."
  },
  {
    q: "Sprint Review có timebox tối đa bao lâu cho Sprint 1 tháng?",
    opts: ["4 giờ", "3 giờ", "8 giờ", "2 giờ"],
    ans: 0,
    explain: "Sprint Review is timeboxed to a maximum of four hours for a one-month Sprint."
  },
  {
    q: "Sprint Review là sự kiện thứ mấy trong Sprint?",
    opts: ["Kế cuối (second to last)", "Cuối cùng", "Thứ ba", "Đầu tiên"],
    ans: 0,
    explain: "Sprint Review is the second to last event of the Sprint. Sprint Retrospective mới là sự kiện cuối kết thúc Sprint."
  },
  {
    q: "Sprint Retrospective có timebox tối đa bao lâu cho Sprint 1 tháng?",
    opts: ["3 giờ", "4 giờ", "2 giờ", "1 giờ"],
    ans: 0,
    explain: "Sprint Retrospective is timeboxed to a maximum of three hours for a one-month Sprint."
  },
  {
    q: "Sự kiện nào KẾT THÚC một Sprint?",
    opts: ["Sprint Retrospective", "Sprint Review", "Daily Scrum cuối", "Khi hết timebox Sprint"],
    ans: 0,
    explain: "The Sprint Retrospective CONCLUDES the Sprint. Sprint Review là kế cuối, Retro là cuối cùng."
  },
  {
    q: "Product Backlog được quản lý bởi ai?",
    opts: ["Product Owner", "Scrum Master", "Developers", "Toàn bộ Scrum Team"],
    ans: 0,
    explain: "Product Backlog: Managed by the Product Owner. PO chịu trách nhiệm nội dung, thứ tự, và sự minh bạch."
  },
  {
    q: "Sprint Backlog được quản lý bởi ai?",
    opts: ["Developers", "Product Owner", "Scrum Master", "Toàn bộ Scrum Team"],
    ans: 0,
    explain: "Sprint Backlog is a plan by and for the Developers. Developers quản lý và cập nhật Sprint Backlog."
  },
  {
    q: "Commitment (cam kết) của Product Backlog là gì?",
    opts: ["Product Goal", "Sprint Goal", "Definition of Done", "Product Vision"],
    ans: 0,
    explain: "For the Product Backlog it is the Product Goal. Product Goal mô tả trạng thái tương lai của sản phẩm."
  },
  {
    q: "Commitment của Sprint Backlog là gì?",
    opts: ["Sprint Goal", "Product Goal", "Definition of Done", "Sprint Forecast"],
    ans: 0,
    explain: "For the Sprint Backlog it is the Sprint Goal."
  },
  {
    q: "Commitment của Increment là gì?",
    opts: ["Definition of Done", "Sprint Goal", "Product Goal", "Acceptance Criteria"],
    ans: 0,
    explain: "For the Increment it is the Definition of Done. Khi PBI meets DoD → Increment born."
  },
  {
    q: "Khi nào một Increment được hình thành (born)?",
    opts: ["Khi PBI đạt (meets) Definition of Done", "Khi Sprint kết thúc", "Khi PO chấp nhận", "Khi Sprint Review diễn ra"],
    ans: 0,
    explain: "The moment a Product Backlog item meets the Definition of Done, an Increment is born."
  },
  {
    q: "PBI không đạt Definition of Done thì điều gì xảy ra?",
    opts: ["Không thể release hoặc trình bày tại Sprint Review, quay về Product Backlog", "Vẫn có thể release nếu PO đồng ý", "Tự động chuyển sang Sprint tiếp theo", "Bị xoá khỏi Product Backlog"],
    ans: 0,
    explain: "If a PBI does not meet the DoD, it cannot be released or even presented at Sprint Review. Instead, it returns to the Product Backlog."
  },
  {
    q: "Có bao nhiêu Increment có thể tạo trong một Sprint?",
    opts: ["Nhiều Increments (multiple)", "Chỉ 1", "Tối đa 3", "Do PO quyết định"],
    ans: 0,
    explain: "Multiple Increments may be created within a Sprint. Sprint Review should never be considered a gate to releasing value."
  },
  {
    q: "Increment có thể được chuyển giao (deliver) khi nào?",
    opts: ["Bất cứ lúc nào, không cần đợi Sprint Review", "Chỉ tại Sprint Review", "Cuối Sprint", "Khi PO quyết định tại Sprint Review"],
    ans: 0,
    explain: "An Increment may be delivered to stakeholders prior to the end of the Sprint. Sprint Review should never be a gate to releasing value."
  },
  {
    q: "Ai chịu trách nhiệm ước lượng độ lớn (sizing) các PBIs?",
    opts: ["Developers", "Product Owner", "Scrum Master", "Toàn bộ Scrum Team"],
    ans: 0,
    explain: "The Developers who will be doing the work are responsible for the sizing. PO may influence by helping understand trade-offs."
  },
  {
    q: "Scrum Master chịu trách nhiệm gì?",
    opts: ["Triển khai Scrum đúng và đảm bảo hiệu quả của Scrum Team", "Quản lý Product Backlog", "Phân công công việc cho Developers", "Báo cáo tiến độ cho stakeholders"],
    ans: 0,
    explain: "SM is accountable for establishing Scrum as defined in the Scrum Guide AND for the Scrum Team's effectiveness."
  },
  {
    q: "Scrum Master có phải là leader không?",
    opts: ["Có — true leaders who serve", "Không — chỉ là facilitator", "Không — chỉ là coach", "Có — leader ra lệnh cho team"],
    ans: 0,
    explain: "Scrum Masters are true leaders who serve the Scrum Team and the larger organization. Servant-leadership."
  },
  {
    q: "Trong Sprint, điều gì KHÔNG ĐƯỢC xảy ra?",
    opts: ["Thay đổi làm tổn hại (endanger) Sprint Goal", "Thêm PBI vào Sprint Backlog", "Thương lượng lại phạm vi với PO", "Tinh chỉnh Product Backlog"],
    ans: 0,
    explain: "During Sprint: No changes that would endanger Sprint Goal. Nhưng scope có thể clarified/renegotiated với PO, PB vẫn được refined."
  },
  {
    q: "Trong Sprint, chất lượng (quality) có thể giảm không?",
    opts: ["Không — Quality does not decrease", "Có nếu PO đồng ý", "Có để kịp deadline", "Tuỳ team quyết định"],
    ans: 0,
    explain: "During the Sprint: Quality does not decrease. Đây là quy tắc không thể thương lượng."
  },
  {
    q: "Refinement có phải là sự kiện chính thức (formal event) trong Scrum không?",
    opts: ["Không — là hoạt động liên tục (ongoing activity)", "Có — diễn ra giữa Sprint", "Có — thay thế Sprint Planning", "Tuỳ team quyết định"],
    ans: 0,
    explain: "Refinement is an ongoing activity, not a formal Scrum event. Nó bổ sung chi tiết: mô tả, thứ tự, độ lớn cho PBIs."
  },
  {
    q: "Nguồn duy nhất công việc của Scrum Team là gì?",
    opts: ["Product Backlog", "Sprint Backlog", "Sprint Goal", "Stakeholder requests"],
    ans: 0,
    explain: "Product Backlog is the single source of work undertaken by the Scrum Team."
  },
  {
    q: "Product Goal nằm ở đâu?",
    opts: ["Trong Product Backlog", "Trong Sprint Backlog", "Trong Definition of Done", "Là document riêng biệt"],
    ans: 0,
    explain: "The Product Goal is in the Product Backlog. The rest of the Product Backlog emerges to define 'what' will fulfill it."
  },
  {
    q: "Scrum Team có thể theo đuổi bao nhiêu Product Goal cùng lúc?",
    opts: ["1 — phải hoàn thành hoặc từ bỏ trước khi chọn mục tiêu mới", "Nhiều mục tiêu song song", "2-3 tuỳ sản phẩm", "Không giới hạn"],
    ans: 0,
    explain: "They must fulfill (or abandon) one objective before taking on the next. Một Product Goal tại một thời điểm."
  },
  {
    q: "Sprint Goal tạo ra điều gì cho Scrum Team?",
    opts: ["Gắn kết (coherence) và tập trung (focus), khuyến khích làm việc cùng nhau", "Áp lực hoàn thành deadline", "Cơ sở đánh giá hiệu suất cá nhân", "KPI cho team"],
    ans: 0,
    explain: "Sprint Goal creates coherence and focus, encouraging the Scrum Team to work together rather than on separate initiatives."
  },
  {
    q: "Ai tạo Sprint Goal?",
    opts: ["Toàn bộ Scrum Team cùng nhau (collaboratively)", "Product Owner", "Developers", "Scrum Master"],
    ans: 0,
    explain: "The whole Scrum Team then collaborates to define a Sprint Goal. It is created during Sprint Planning."
  },
  {
    q: "Nếu công việc trong Sprint không như mong đợi, Developers làm gì?",
    opts: ["Thương lượng phạm vi Sprint Backlog với PO mà không ảnh hưởng Sprint Goal", "Tự huỷ Sprint", "Báo cho Scrum Master tháo gỡ", "Bỏ qua Sprint Goal và hoàn thành hết PBIs"],
    ans: 0,
    explain: "They collaborate with the PO to negotiate the scope of the Sprint Backlog within the Sprint without affecting the Sprint Goal."
  },
  {
    q: "Sprint Review có phải là gate (cổng) để release giá trị không?",
    opts: ["Không — Sprint Review should never be considered a gate to releasing value", "Có — phải qua Review mới được release", "Tuỳ team quyết định", "Có — PO phải approve tại Review"],
    ans: 0,
    explain: "The Sprint Review should never be considered a gate to releasing value. Increment có thể deliver trước khi Sprint kết thúc."
  },
  {
    q: "Scrum Team có mấy vai trò (accountabilities)?",
    opts: ["3: Developers, Product Owner, Scrum Master", "4: Developers, PO, SM, Stakeholders", "2: PO, Development Team", "5: PO, SM, Architect, Tester, Developer"],
    ans: 0,
    explain: "Scrum defines three specific accountabilities within the Scrum Team: the Developers, the Product Owner, and the Scrum Master."
  },
  {
    q: "Trong Sprint, Product Backlog có được tinh chỉnh (refined) không?",
    opts: ["Có — Product Backlog is refined as needed", "Không — chỉ tinh chỉnh ngoài Sprint", "Chỉ khi PO yêu cầu", "Chỉ trong Sprint Planning"],
    ans: 0,
    explain: "During the Sprint: The Product Backlog is refined as needed. Refinement là hoạt động liên tục."
  },
  {
    q: "DoD do ai tạo nếu tổ chức không có tiêu chuẩn?",
    opts: ["Scrum Team phải tự tạo DoD phù hợp sản phẩm", "Product Owner", "Scrum Master", "Developers"],
    ans: 0,
    explain: "If it is not an organizational standard, the Scrum Team must create a Definition of Done appropriate for the product."
  },
  {
    q: "Nếu tổ chức đã có DoD tiêu chuẩn, Scrum Team làm gì?",
    opts: ["Phải tuân thủ ít nhất (as a minimum), có thể thêm nhưng không giảm", "Có thể bỏ qua nếu team đồng ý", "Chỉ áp dụng cho team mới", "PO quyết định có tuân thủ hay không"],
    ans: 0,
    explain: "If the DoD is part of the standards of the organization, all Scrum Teams must follow it as a minimum."
  },
  {
    q: "Nhiều Scrum Teams cùng 1 sản phẩm — DoD như thế nào?",
    opts: ["Phải cùng định nghĩa và tuân thủ chung một DoD", "Mỗi team có DoD riêng", "Team lớn nhất quyết định", "PO chọn DoD phù hợp nhất"],
    ans: 0,
    explain: "If there are multiple Scrum Teams working together on a product, they must mutually define and comply with the same Definition of Done."
  },
  {
    q: "Scrum có thể triển khai một phần (partial) không?",
    opts: ["Có thể, nhưng kết quả KHÔNG phải Scrum", "Có, vẫn được gọi là Scrum", "Không, phải triển khai 100%", "Tuỳ Scrum Master quyết định"],
    ans: 0,
    explain: "While implementing only parts of Scrum is possible, the result is not Scrum. Scrum exists only in its entirety."
  },
  {
    q: "Scrum là gì?",
    opts: ["Một framework tinh gọn (lightweight framework)", "Một methodology", "Một process", "Một set of best practices"],
    ans: 0,
    explain: "Scrum is a lightweight framework. Không phải methodology hay process. Framework cố ý không hoàn chỉnh (purposefully incomplete)."
  },
  {
    q: "Sprint có độ dài cố định không?",
    opts: ["Có — fixed length events", "Không — thay đổi mỗi Sprint", "Tuỳ PO quyết định", "Thay đổi theo velocity"],
    ans: 0,
    explain: "Sprints are fixed length events of one month or less to create consistency."
  },
  {
    q: "Sprint mới bắt đầu khi nào?",
    opts: ["Ngay sau khi Sprint trước kết thúc (immediately)", "Sau 1-2 ngày nghỉ", "Sau khi PO tạo Sprint Goal mới", "Đầu tuần tiếp theo"],
    ans: 0,
    explain: "A new Sprint starts immediately after the conclusion of the previous Sprint. Không có khoảng trống."
  },
  {
    q: "Ai chọn PBIs để đưa vào Sprint?",
    opts: ["Developers (thảo luận với PO)", "Product Owner", "Scrum Master", "Stakeholders"],
    ans: 0,
    explain: "Through discussion with the Product Owner, the Developers select items from the Product Backlog to include in the current Sprint."
  },
  {
    q: "Developers phân tách PBIs thành work items có kích thước tối đa bao nhiêu?",
    opts: ["1 ngày hoặc nhỏ hơn", "1 Sprint", "1 tuần", "Không giới hạn"],
    ans: 0,
    explain: "Decomposing PBIs into smaller work items of one day or less. How this is done is at the sole discretion of the Developers."
  },
  {
    q: "Ai quyết định cách biến PBIs thành Increments of value?",
    opts: ["Chỉ Developers — no one else tells them how", "Product Owner", "Scrum Master", "Technical Lead"],
    ans: 0,
    explain: "No one else tells them how to turn Product Backlog items into Increments of value. Đây là quyền tự quản của Developers."
  },
  {
    q: "Mục đích chính của Daily Scrum là gì?",
    opts: ["Kiểm tra tiến độ Sprint Goal và điều chỉnh Sprint Backlog", "Báo cáo cho Scrum Master", "Cập nhật stakeholders", "Review code"],
    ans: 0,
    explain: "Purpose: inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary."
  },
  {
    q: "Developers có cần tuân thủ format cụ thể cho Daily Scrum không?",
    opts: ["Không — chọn bất kỳ hình thức nào miễn tập trung Sprint Goal", "Có — phải trả lời 3 câu hỏi chuẩn", "Có — phải dùng Scrum Board", "Có — Scrum Master quyết định format"],
    ans: 0,
    explain: "Developers can select whatever structure and techniques they want, as long as their Daily Scrum focuses on progress toward the Sprint Goal."
  },
  {
    q: "Daily Scrum có phải cơ hội duy nhất để Developers điều chỉnh kế hoạch không?",
    opts: ["Không — họ thường gặp nhau nhiều lần trong ngày", "Có — chỉ được điều chỉnh tại Daily Scrum", "Có — theo quy định Scrum", "Tuỳ Scrum Master cho phép"],
    ans: 0,
    explain: "The Daily Scrum is not the only time Developers are allowed to adjust their plan. They often meet throughout the day."
  },
  {
    q: "Sprint Review là buổi trình bày (presentation) hay buổi làm việc?",
    opts: ["Buổi LÀM VIỆC (working session)", "Buổi trình bày", "Demo sản phẩm", "Họp báo cáo"],
    ans: 0,
    explain: "Sprint Review is a working session and the Scrum Team should avoid limiting it to a presentation."
  },
  {
    q: "Retrospective kiểm tra những yếu tố nào?",
    opts: ["Con người, tương tác, quy trình, công cụ, Definition of Done", "Chỉ code quality", "Chỉ quy trình làm việc", "Chỉ mối quan hệ giữa các thành viên"],
    ans: 0,
    explain: "Scrum Team inspects how the last Sprint went with regards to individuals, interactions, processes, tools, and their DoD."
  },
  {
    q: "Cải tiến từ Retrospective có thể được đưa vào đâu?",
    opts: ["Sprint Backlog cho Sprint tiếp theo", "Product Backlog", "Separate improvement backlog", "Chỉ ghi chú, không cần hành động"],
    ans: 0,
    explain: "The most impactful improvements may even be added to the Sprint Backlog for the next Sprint."
  },
  {
    q: "Scrum sử dụng cách tiếp cận gì để tối ưu khả năng dự đoán?",
    opts: ["Iterative, incremental (lặp lại, tăng dần)", "Predictive planning", "Sequential phases", "Big Design Up Front"],
    ans: 0,
    explain: "Scrum employs an iterative, incremental approach to optimize predictability and to control risk."
  },
  {
    q: "Burn-down, burn-up, cumulative flow có thay thế empiricism không?",
    opts: ["Không — chúng hữu ích nhưng không thay thế empiricism", "Có — là cách đo lường chính", "Có — bắt buộc trong Scrum", "Tuỳ team"],
    ans: 0,
    explain: "While proven useful, these do not replace the importance of empiricism. In complex environments, what will happen is unknown."
  },
  {
    q: "Trong môi trường phức tạp, điều gì được sử dụng để ra quyết định?",
    opts: ["Chỉ những gì đã xảy ra (what has already happened)", "Kế hoạch chi tiết", "Dự đoán chuyên gia", "AI/ML predictions"],
    ans: 0,
    explain: "Only what has already happened may be used for forward-looking decision making. Đó là empiricism."
  },
  {
    q: "PO muốn thay đổi Product Backlog, ai cần thuyết phục?",
    opts: ["Phải thuyết phục Product Owner", "Phải thuyết phục Scrum Master", "Phải thuyết phục Developers", "Phải thuyết phục stakeholders"],
    ans: 0,
    explain: "Those wanting to change the Product Backlog can do so by trying to convince the Product Owner. PO là người duy nhất quản lý PB."
  },
  {
    q: "Để Product Owner thành công, điều gì cần thiết từ tổ chức?",
    opts: ["Toàn bộ tổ chức phải tôn trọng quyết định của PO", "Tổ chức cung cấp budget không giới hạn", "CEO phải approve mọi quyết định của PO", "Không cần gì từ tổ chức"],
    ans: 0,
    explain: "For Product Owners to succeed, the entire organization must respect their decisions."
  },
  {
    q: "Scrum Master phục vụ Product Owner bằng cách nào?",
    opts: ["Tất cả các đáp án sau", "Hỗ trợ tìm kỹ thuật xác định Product Goal và quản lý PB hiệu quả", "Giúp Team hiểu cần PBIs rõ ràng, súc tích", "Tạo điều kiện cộng tác stakeholders"],
    ans: 0,
    explain: "SM serves PO: effective Product Goal & PB management, clear PBIs, empirical product planning, facilitating stakeholder collaboration."
  },
  {
    q: "Scrum Master phục vụ tổ chức bằng cách nào?",
    opts: ["Khởi xướng/huấn luyện Scrum, tư vấn triển khai, giúp hiểu empiricism, tháo gỡ rào cản", "Quản lý nhân sự", "Báo cáo KPI", "Phê duyệt budget"],
    ans: 0,
    explain: "Leading/training Scrum adoption, planning implementations, helping understand empirical approach, removing barriers."
  },
  {
    q: "Scrum framework có tính bất biến (immutable) không?",
    opts: ["Có — Scrum framework is immutable", "Không — có thể tuỳ chỉnh", "Chỉ phần artifacts là bất biến", "Tuỳ tổ chức"],
    ans: 0,
    explain: "The Scrum framework, as outlined herein, is immutable. Bạn có thể thêm practices/techniques nhưng không thể thay đổi Scrum framework."
  },
  {
    q: "Scrum Team self-managing nghĩa là?",
    opts: ["Tự quyết định ai làm gì, khi nào, và như thế nào", "Không cần Product Owner", "Không cần quản lý nào", "Tự trả lương cho nhau"],
    ans: 0,
    explain: "Self-managing: they internally decide who does what, when, and how."
  },
  {
    q: "Nếu Scrum Team quá lớn, nên làm gì?",
    opts: ["Tái cấu trúc thành nhiều Scrum Teams nhỏ, cùng Product Goal, PB, PO", "Thêm Scrum Master", "Chia thành sub-teams trong cùng Scrum Team", "Giảm số meetings"],
    ans: 0,
    explain: "Should consider reorganizing into multiple cohesive Scrum Teams, each focused on same product, sharing same Product Goal, PB, and PO."
  },
  {
    q: "Scrum Team chịu trách nhiệm cho những hoạt động nào?",
    opts: ["Tất cả hoạt động liên quan đến sản phẩm (stakeholder collab, verification, maintenance, R&D...)", "Chỉ phát triển code", "Chỉ delivery", "Chỉ công việc trong Sprint Backlog"],
    ans: 0,
    explain: "Responsible for all product-related activities from stakeholder collaboration, verification, maintenance, operation, experimentation, R&D..."
  },
  {
    q: "Toàn bộ Scrum Team chịu trách nhiệm (accountable) cho điều gì mỗi Sprint?",
    opts: ["Tạo ra Increment có giá trị, sử dụng được (valuable, useful)", "Hoàn thành hết Sprint Backlog", "Tăng velocity", "Không có bug"],
    ans: 0,
    explain: "The entire Scrum Team is accountable for creating a valuable, useful Increment every Sprint."
  },
  {
    q: "Mục đích của Sprint Retrospective là gì?",
    opts: ["Lập kế hoạch tăng chất lượng và hiệu quả", "Kiểm tra Increment", "Demo sản phẩm", "Lập kế hoạch Sprint tiếp theo"],
    ans: 0,
    explain: "The purpose of the Sprint Retrospective is to plan ways to increase quality and effectiveness."
  },
  {
    q: "Scrum Guide do ai viết?",
    opts: ["Ken Schwaber và Jeff Sutherland", "Agile Alliance", "Scrum Alliance", "Project Management Institute"],
    ans: 0,
    explain: "Scrum Guide written and provided by Ken Schwaber and Jeff Sutherland, co-creators of Scrum."
  },
  {
    q: "Những sự kiện Scrum có tác dụng vì chúng hiện thực điều gì?",
    opts: ["3 trụ cột thực nghiệm: Transparency, Inspection, Adaptation", "5 giá trị Scrum", "12 nguyên tắc Agile", "Lean principles"],
    ans: 0,
    explain: "These events work because they implement the empirical Scrum pillars of transparency, inspection, and adaptation."
  },
  {
    q: "Vai trò 'Developer' trong Scrum dùng để?",
    opts: ["Đơn giản hoá, không loại trừ — bao gồm mọi chuyên gia tạo giá trị", "Chỉ lập trình viên", "Chỉ kỹ sư phần mềm", "Chỉ QA và dev"],
    ans: 0,
    explain: "We use the word 'developers' in Scrum not to exclude, but to simplify. If you get value from Scrum, consider yourself included."
  },
  {
    q: "Transparency enables gì? Inspection enables gì?",
    opts: ["Transparency enables Inspection; Inspection enables Adaptation", "Inspection enables Transparency; Adaptation enables Inspection", "Adaptation enables Transparency", "Tất cả song song"],
    ans: 0,
    explain: "Transparency enables inspection. Inspection enables adaptation. Đó là chuỗi tiên quyết."
  },
  {
    q: "Khi 5 giá trị Scrum được thể hiện, điều gì xảy ra?",
    opts: ["3 trụ cột thực nghiệm sống dậy (come to life) và xây dựng niềm tin (build trust)", "Team đạt velocity cao nhất", "Stakeholders hài lòng", "Sprint luôn thành công"],
    ans: 0,
    explain: "When these values are embodied, the empirical Scrum pillars come to life building trust."
  },
  {
    q: "Các sự kiện Scrum dùng để tạo ra gì?",
    opts: ["Sự điều tiết (regularity) và giảm thiểu meetings không cần thiết", "Bureaucracy", "Documentation", "Reports cho management"],
    ans: 0,
    explain: "Events are used in Scrum to create regularity and to minimize the need for meetings not defined in Scrum."
  },
  {
    q: "Sprint quá dài thì rủi ro gì?",
    opts: ["Sprint Goal dễ lỗi thời, complexity tăng, risk tăng", "Team làm việc hiệu quả hơn", "Ít meetings hơn", "Không có rủi ro"],
    ans: 0,
    explain: "When a Sprint's horizon is too long the Sprint Goal may become invalid, complexity may rise, and risk may increase."
  },
  {
    q: "Mỗi Sprint có thể xem như?",
    opts: ["Một dự án ngắn (short project)", "Một iteration", "Một milestone", "Một release"],
    ans: 0,
    explain: "Each Sprint may be considered a short project."
  },
  {
    q: "PO đề xuất điều gì trong Sprint Planning (Topic 1)?",
    opts: ["Cách tăng giá trị và tính hữu dụng của sản phẩm trong Sprint hiện tại", "Danh sách PBIs phải hoàn thành", "Technical architecture", "Sprint velocity target"],
    ans: 0,
    explain: "The PO proposes how the product could increase its value and utility in the current Sprint."
  },
  {
    q: "Ai phải tuân thủ (conform to) Definition of Done?",
    opts: ["Developers", "Product Owner", "Scrum Master", "Stakeholders"],
    ans: 0,
    explain: "The Developers are required to conform to the Definition of Done."
  },
  {
    q: "Product Backlog có tính gì?",
    opts: ["Emergent (luôn tiến triển) và Ordered (có thứ tự)", "Fixed và prioritized", "Complete và detailed", "Frozen sau Sprint Planning"],
    ans: 0,
    explain: "The Product Backlog is an emergent, ordered list of what is needed to improve the product."
  },
  {
    q: "Scrum Events được thiết kế nhằm mục đích gì?",
    opts: ["Tạo ra sự minh bạch cần thiết (enable transparency required)", "Tạo documentation", "Report tiến độ", "Justify budget"],
    ans: 0,
    explain: "These events are specifically designed to enable the transparency required."
  },
  {
    q: "Nếu không thực hiện sự kiện Scrum đúng quy định, hậu quả là gì?",
    opts: ["Mất cơ hội kiểm tra và thích ứng (lost opportunities to inspect and adapt)", "Không có hậu quả", "Team bị phạt", "Sprint tự động fail"],
    ans: 0,
    explain: "Failure to operate any events as prescribed results in lost opportunities to inspect and adapt."
  },
  {
    q: "Tạo phẩm Scrum được thiết kế để?",
    opts: ["Tối đa sự minh bạch của thông tin chính yếu (maximize transparency of key information)", "Documentation đầy đủ", "Report cho management", "Track velocity"],
    ans: 0,
    explain: "Scrum's artifacts represent work or value. They are designed to maximize transparency of key information."
  },
  {
    q: "Các cam kết (commitments) tồn tại nhằm?",
    opts: ["Nhấn mạnh empiricism và các giá trị Scrum cho Team và stakeholders", "Tạo áp lực cho Developers", "Đánh giá hiệu suất", "Legal protection"],
    ans: 0,
    explain: "These commitments exist to reinforce empiricism and the Scrum values for the Scrum Team and their stakeholders."
  },
  {
    q: "Sản phẩm (product) trong Scrum là gì?",
    opts: ["Phương tiện chuyên chở giá trị (vehicle to deliver value) — có thể là dịch vụ, sản phẩm vật lý, hoặc trừu tượng", "Chỉ phần mềm", "Chỉ sản phẩm vật lý", "Website"],
    ans: 0,
    explain: "A product is a vehicle to deliver value. It has a clear boundary, known stakeholders. Could be a service, physical product, or something more abstract."
  },
  {
    q: "Sprint Backlog được cập nhật khi nào?",
    opts: ["Xuyên suốt Sprint mỗi khi có thêm thông tin (throughout the Sprint)", "Chỉ trong Sprint Planning", "Chỉ trong Daily Scrum", "Chỉ khi PO yêu cầu"],
    ans: 0,
    explain: "The Sprint Backlog is updated throughout the Sprint as more is learned."
  },
  {
    q: "Sprint Backlog cần đủ chi tiết để?",
    opts: ["Kiểm tra tiến độ trong Daily Scrum", "Báo cáo stakeholders", "Tính toán velocity", "Ước lượng cost"],
    ans: 0,
    explain: "It should have enough detail that they can inspect their progress in the Daily Scrum."
  },
  {
    q: "PO ảnh hưởng đến Developers trong việc sizing bằng cách nào?",
    opts: ["Giúp họ hiểu và cân nhắc các trade-offs", "Ra lệnh phải estimate theo cách nào", "Không được ảnh hưởng", "Assign story points"],
    ans: 0,
    explain: "The PO may influence the Developers by helping them understand and select trade-offs."
  },
  {
    q: "Scrum Master phục vụ Scrum Team bằng cách nào?",
    opts: ["Coaching tự quản, giúp tạo Increment giá trị cao, tháo gỡ impediments, đảm bảo events đúng timebox", "Assign tasks", "Approve leave requests", "Write code"],
    ans: 0,
    explain: "Coaching self-management, helping focus on high-value Increments meeting DoD, causing removal of impediments, ensuring events are within timebox."
  },
  {
    q: "Sprint Retrospective kết thúc điều gì?",
    opts: ["Sprint", "Ngày làm việc", "Product release", "Project phase"],
    ans: 0,
    explain: "The Sprint Retrospective concludes the Sprint."
  },
  {
    q: "Khi giá trị Scrum không được thể hiện, hậu quả là gì?",
    opts: ["Các trụ cột thực nghiệm không thể sống dậy, thiếu niềm tin", "Không có hậu quả", "Team bị giải tán", "SM bị thay thế"],
    ans: 0,
    explain: "Values give direction. When embodied → pillars come to life building trust. Without values → pillars cannot function."
  },
  {
    q: "Adaptation trở nên khó khăn khi?",
    opts: ["Những người liên quan không được trao quyền tự quản (not empowered/self-managing)", "Team quá nhỏ", "Sprint quá ngắn", "Có quá nhiều meetings"],
    ans: 0,
    explain: "Adaptation becomes more difficult when the people involved are not empowered or self-managing."
  },
  {
    q: "Artifacts có transparency thấp sẽ dẫn đến?",
    opts: ["Quyết định giảm giá trị và tăng rủi ro (diminish value and increase risk)", "Không ảnh hưởng gì", "Sprint dài hơn", "Team lớn hơn"],
    ans: 0,
    explain: "Artifacts that have low transparency can lead to decisions that diminish value and increase risk."
  },
  {
    q: "Developers instill quality bằng cách nào?",
    opts: ["Tuân thủ Definition of Done (adhering to DoD)", "Testing 100%", "Code review bắt buộc", "Pair programming"],
    ans: 0,
    explain: "Instilling quality by adhering to a Definition of Done."
  },
  {
    q: "Scrum cung cấp cadence qua gì?",
    opts: ["5 sự kiện của nó (its five events)", "Meetings hàng tuần", "Reports hàng tháng", "KPIs"],
    ans: 0,
    explain: "To help with inspection, Scrum provides cadence in the form of its five events."
  },
  {
    q: "Working in Sprints at a sustainable pace cải thiện gì?",
    opts: ["Focus (tập trung) và consistency (nhất quán) của Scrum Team", "Revenue", "Customer satisfaction", "Code quality"],
    ans: 0,
    explain: "Working in Sprints at a sustainable pace improves the Scrum Team's focus and consistency."
  },
  {
    q: "PO và stakeholders tham gia tích cực ở sự kiện nào?",
    opts: ["Sprint Review", "Daily Scrum", "Sprint Retrospective", "Sprint Planning"],
    ans: 0,
    explain: "Stakeholders are actively engaged with the Scrum Team at Sprint Review."
  },
  {
    q: "Sprint Planning có thể mời ai ngoài Scrum Team?",
    opts: ["Bất kỳ ai để đóng góp ý kiến (provide advice)", "Không ai", "Chỉ manager", "Chỉ stakeholders chính"],
    ans: 0,
    explain: "The Scrum Team may also invite other people to attend Sprint Planning to provide advice."
  },
  {
    q: "Những thay đổi nào KHÔNG nên có trong Sprint?",
    opts: ["Thay đổi gây nguy hại cho Sprint Goal (endanger Sprint Goal)", "Thay đổi kỹ thuật", "Bug fixes", "Scope clarification với PO"],
    ans: 0,
    explain: "No changes are made that would endanger the Sprint Goal. Scope clarification với PO là OK."
  },
  {
    q: "Velocity là gì trong Scrum?",
    opts: ["Chỉ số tuỳ chọn (optional) về lượng PB biến thành Increment mỗi Sprint", "Metric bắt buộc", "KPI cho management", "Tiêu chuẩn đánh giá team"],
    ans: 0,
    explain: "Velocity: an optional indication of the amount of Product Backlog turned into Increment during a Sprint. Tracked by Developers for internal use."
  },
  {
    q: "Scrum Events được thiết kế để kích thích (provoke) gì?",
    opts: ["Sự thay đổi (change)", "Stability", "Documentation", "Compliance"],
    ans: 0,
    explain: "Scrum events are designed to provoke change."
  },
  {
    q: "Quyết định của PO được thể hiện qua đâu?",
    opts: ["Nội dung và thứ tự trong Product Backlog, và Increment được kiểm định tại Sprint Review", "Email gửi team", "Meeting minutes", "Jira tickets"],
    ans: 0,
    explain: "Decisions are visible in the content and ordering of the Product Backlog, and through the inspectable Increment at the Sprint Review."
  },
  {
    q: "Sprint Backlog bao gồm các hạng mục được chọn từ đâu?",
    opts: ["Product Backlog", "Sprint Goal", "Definition of Done", "Stakeholder requests"],
    ans: 0,
    explain: "Sprint Backlog = Sprint Goal (why) + PBIs selected from Product Backlog (what) + actionable plan (how)."
  },
  {
    q: "Increment phải đảm bảo điều gì giữa các Increment?",
    opts: ["Tất cả Increments tích hợp tốt (work together)", "Độc lập hoàn toàn", "Không liên quan nhau", "Có documentation riêng"],
    ans: 0,
    explain: "Each Increment is additive to all prior Increments and thoroughly verified, ensuring that all Increments work together."
  },
  {
    q: "Tổng của tất cả Increments được trình bày ở đâu?",
    opts: ["Sprint Review", "Sprint Retrospective", "Sprint Planning", "Daily Scrum"],
    ans: 0,
    explain: "The sum of the Increments is presented at the Sprint Review thus supporting empiricism."
  },
  {
    q: "Để Increment cung cấp giá trị, điều gì cần thiết?",
    opts: ["Increment phải sử dụng được (usable)", "PO phải approve", "Stakeholders phải test", "CEO phải sign off"],
    ans: 0,
    explain: "In order to provide value, the Increment must be usable."
  },
];
