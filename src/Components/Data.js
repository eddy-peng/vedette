const questions = [
    {
      id: 1,
      title: "How is Vedette deduplicating report content in real-time?",
      info: "Vedette employs a dynamic real-time deduplication process to ensure efficiency and accuracy in bug resolution. It meticulously tracks every input in the bug report form, including details like attack vector, memory access type, and exploit type. Then, it compares this input against a vast database of historically submitted bug reports, analyzing similarities across various attributes. Using advanced algorithms, Vedette calculates similarity percentages, providing you with instant feedback on how closely your report aligns with previously documented issues. By leveraging this real-time deduplication process, Vedette empowers you to identify potential duplicates efficiently, ultimately streamlining your bug resolution workflow.",
    },
    {
      id: 2,
      title: "What role do bug hunters play in automated deduplication?",
      info: "Bug hunters play a crucial role in the deduplication process within Vedette. As active contributors to the bug-reporting ecosystem, bug hunters provide unique insights and firsthand experiences of encountering software issues. Their reports often serve as valuable data points for Vedette's deduplication algorithms. By submitting detailed bug reports, bug hunters contribute to the expansion and refinement of Vedette's database, enhancing its ability to accurately identify duplicate issues. Additionally, bug hunters may also benefit from Vedette's deduplication capabilities by receiving prompt feedback on the similarity of their reports to previously documented issues, enabling them to focus their efforts on identifying and reporting new, unique bugs. Ultimately, bug hunters and Vedette work in tandem to streamline the bug resolution process and improve the overall quality of software development projects.",
    },
    {
      id: 3,
      title: "Will Vedette be implemented in other areas of Android Security?",
      info: "Vedette is designed with a specific focus on bug deduplication, and at present, we do not plan to implement it in other areas of Android Security. This decision is rooted in the understanding that AI systems need to be highly trained on specific tasks to ensure optimal performance. However, we recognize the importance of incorporating Android Security reports into Vedette's database for future enhancements. By leveraging these reports, Vedette can further refine its deduplication capabilities and provide even more accurate results. Our commitment to focusing solely on deduplication aligns with literature recommendations, ensuring that Vedette remains a specialized and effective tool in the bug resolution process.",
    },
    {
      id: 4,
      title: "Are there safeguards in place to ensure the security of Vedette?",
      info: "Security is a top priority for us, and Vedette is built with several safeguards to protect the confidentiality, integrity, and availability of data. These safeguards include stringent access controls to restrict access to authorized personnel only and following best practices in code to ensure security. Additionally, Vedette is hosted on a secure, reliable infrastructure to ensure high availability and uptime. These measures work together to provide a secure environment for Vedette, giving users confidence in the protection of data.",
    },
    {
      id: 5,
      title: "How will human analysts at Google use Vedette?",
      info: "Human analysts at our company will primarily leverage Vedette to streamline and automate the deduplication process, reducing the need for manual review of duplicate bug reports. By making deduplication more external-facing and automated, Vedette empowers analysts to focus their efforts on investigating unique and critical issues, rather than spending time on repetitive tasks. However, Vedette also provides valuable information on user inputs, bug similarity, and relevant attributes associated with each report. This data can be immensely useful for analysts in the event that users decide to submit their report Armed with insights from Vedette, analysts can more effectively prioritize and address bug reports, ensuring prompt and efficient resolution of issues.",
    },
  ];
  export default questions;