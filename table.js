(function () {
  "use strict";

  function escapeHtml(s) {
    if (typeof s !== "string") return "";
    return s
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  const tableHTML0 = `
    <table class="pdf-table" aria-labelledby="modal-title">
      <thead>
        <tr>
          <th>Select Service</th>
          <th>Services and Platforms</th>
          <th>Scope and Description</th>
          <th>Frequency / Total No. of Doctors / MOQ</th>
          <th>Cost Option 1</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="section-header" colspan="5">ST Solutions 1. Overcoming Reduced Doctor Access & Time</td></tr>
        <tr>
          <td><input type="checkbox" class="service-checkbox" data-service-id="1.1"> 1.1</td>
          <td><strong>EduProMD:</strong><br>An enterprise solution that empowers doctors and Representatives with personalized content in an engaging video reel format.</td>
          <td>
            <ul>
              <li><strong>Doctor-wise Login:</strong></li>
              <li><strong>Pre-loaded Video Reels:</strong> This includes Therapy-specific patient education videos</li>
              <li><strong>Personalized Frames</strong></li>
              <li><strong>Download Options</strong></li>
              <li><strong>Social Media Sharing</strong></li>
              <li><strong>Live Dashboard:</strong> doctor-wise, rep-wise, and topic-wise.</li>
            </ul>
          </td>
          <td>
            <strong>Package Details:</strong>
            <ul>
              <li>Minimum 1,000 doctor logins</li>
              <li>300 pre-loaded video reels</li>
              <li>15 personalized frames</li>
              <li>One-year subscription</li>
            </ul>
          </td>
          <td>20 lac</td>
        </tr>
        <tr>
          <td><input type="checkbox" class="service-checkbox" data-service-id="1.2"> 1.2</td>
          <td>SwarnimTouch Expert Voice Reel Campaign, or<br>SwarnimTouch Patient-First Awareness Video Campaign</td>
          <td>
            <strong>Format:</strong> Bite-sized videos from KOLs (Key Opinion Leaders) – e.g., “Clinical Pearls in 1 Minute”, “Patient First Awareness Tips”, or “Know Your Doctor”.<br>
            <strong>Process:</strong>
            <ul>
              <li>Reps record the video.</li>
              <li>Videos are shared on assigned WhatsApp groups.</li>
              <li>ST team edits and personalizes the video before resharing to the group.</li>
            </ul>
          </td>
          <td>
            <strong>Minimum Order Quantity (MOQ):</strong>
            <ul>
              <li>1,000 doctors</li>
            </ul>
            <strong>Services Included:</strong>
            <ul>
              <li>End-to-end design, animation, and coordination</li>
            </ul>
          </td>
          <td>10 lac</td>
        </tr>
        <tr>
          <td><input type="checkbox" class="service-checkbox" data-service-id="1.3"> 1.3</td>
          <td>SwarnimTouch Web-Based Video Reel Platform – Rep-Led Engagement</td>
          <td>
            <strong>Web-Based Platform:</strong><br>
            Offers 2D animated videos focused on disease awareness or important case presentations.
          </td>
          <td>
            <strong>Campaign Frequency & Reach:</strong><br>
            Conducted 6 times a year, reaching up to 5,000 doctors and up to 500 rep logins per campaign.
          </td>
          <td>5 lac</td>
        </tr>
        <tr>
          <td><input type="checkbox" class="service-checkbox" data-service-id="1.4"> 1.4</td>
          <td><strong>On-Demand Studio Webinar Platform -</strong><br>Doctors can log in anytime, anywhere for continuous learning<br><br><strong>Regular Webinar Series -</strong><br>Live & On-Demand HCP Engagement Content</td>
          <td>
            <ul>
              <li><strong>Minimum Package:</strong> 30 live webinars per year, maximum 3 hours each, with up to 5,000 viewers</li>
              <li><strong>Features:</strong>
                <ul>
                  <li>Webinar archive for on-demand access</li>
                  <li>Interactive polls and quizzes</li>
                  <li>100+ key snapshots in video format</li>
                  <li>Certificates for participants</li>
                  <li>Live dashboard analytics</li>
                  <li>Downloadable pre-read materials</li>
                  <li>Reel-based monthly news updates</li>
                </ul>
              </li>
              <li><strong>Subscription:</strong> One-year access</li>
            </ul>
          </td>
          <td></td>
          <td>10 lac</td>
        </tr>
        <tr>
          <td><input type="checkbox" class="service-checkbox" data-service-id="1.5"> 1.5</td>
          <td><strong>Virtual HCP Hub -</strong><br>A 3D interactive virtual zone<br><br><strong>End-to-End Virtual Platform for HCP Engagement</strong></td>
          <td>
            <ul>
              <li><strong>Live:</strong> Webinars, conferences, and real-time Q&A</li>
              <li><strong>Content Hub:</strong> Brand updates, clinical data, and resources</li>
              <li><strong>Engagement Area:</strong> Interactive tools and discussions</li>
              <li><strong>Patient Resources:</strong> Education, support initiatives, and campaigns</li>
              <li><strong>Sales Team Enablement:</strong> Training modules, trackers, and promotional material</li>
              <li><strong>Research Paper Library:</strong> On-demand video summaries</li>
            </ul>
            <strong>Highly Engaging & Interactive Platform:</strong><br>Covers brands and disease education with 360° HCP engagement<br><strong>One-stop solution</strong> for all patient needs<br>Features <strong>24×7 interactive livestream Q&A</strong> with experts, enabling doctors to ask questions in real-time
          </td>
          <td></td>
          <td>50 lac</td>
        </tr>
        <tr>
          <td><input type="checkbox" class="service-checkbox" data-service-id="1.6"> 1.6</td>
          <td><strong>Swarnim InClinic Touch for Reps -</strong><br><strong>Impact:</strong> Enables doctors to engage on their own schedule, extending interaction beyond in-clinic visits.</td>
          <td>
            <strong>Web-Based Gamification – Quick Conversations:</strong>
            <ul>
              <li><strong>Concept-Wise Campaign:</strong>
                <ul>
                  <li>Minimum 25 touchpoints per campaign</li>
                  <li>Analytics-driven with rep-wise and doctor-wise tagging</li>
                  <li>Dashboard for real-time monitoring and insights</li>
                </ul>
              </li>
            </ul>
          </td>
          <td></td>
          <td>15 lac</td>
        </tr>
        <tr class="impact-row">
          <td colspan="5"><strong>Impact:</strong> Doctors engage on their schedule, not just during in-clinic visits.</td>
        </tr>
      </tbody>
    </table>`;

  const tableHTML1 = `
    <table class="pdf-table" aria-labelledby="modal-title">
      <thead>
        <tr>
          <th>Select Service</th>
          <th>Services and Platforms</th>
          <th>Scope and Description</th>
          <th>Frequency / Total No. of Doctors / MOQ</th>
          <th>Cost Option 1</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="section-header" colspan="5">ST Solutions 2. Competing in an Overcrowded Market</td></tr>
        <tr>
          <td><input type="checkbox" class="service-checkbox" data-service-id="2.1"> 2.1</td>
          <td><strong>Podcast for Doctors</strong></td>
          <td>
            <strong>Live Studio:</strong>
            <ul>
              <li>Includes Host Branding, Audio-Visual Set-up, and On-site shoot.</li>
            </ul>
          </td>
          <td><strong>Minimum Order Quantity (MOQ):</strong><br>25 doctors per year</td>
          <td>20 lac</td>
        </tr>
        <tr>
          <td><input type="checkbox" class="service-checkbox" data-service-id="2.2"> 2.2</td>
          <td><strong>Social Media Community & Forums -</strong><br>Expert-led forums with active moderation</td>
          <td>
            <strong>Branded Doctor Communities with Moderated Forums:</strong>
            <ul>
              <li>Includes on-demand and live case study discussion series (fostering peer-to-peer influence among HCPs)</li>
            </ul>
          </td>
          <td>
            <strong>Community Creation & Management:</strong>
            <ul>
              <li>Setup and manage doctor or patient communities</li>
              <li>Monthly engagement activities to maintain active participation</li>
            </ul>
          </td>
          <td>15 lac</td>
        </tr>
        <tr>
          <td><input type="checkbox" class="service-checkbox" data-service-id="2.3"> 2.3</td>
          <td><strong>Virtual Product Launch Events -</strong><br>Live-streamed experiences with immersive 3D demos</td>
          <td></td>
          <td><strong>Access:</strong><br>Unlimited users with sessions of up to 5 hours</td>
          <td>5 lac</td>
        </tr>
        <tr class="impact-row">
          <td colspan="5"><strong>Impact:</strong> Positions brand as knowledge partner, not just another sales rep.</td>
        </tr>
      </tbody>
    </table>`;

  const tableHTML2 = `
    <table class="pdf-table" aria-labelledby="modal-title">
      <thead>
        <tr>
          <th>Select Service</th>
          <th>Services and Platforms</th>
          <th>Scope and Description</th>
          <th>Frequency / Total No. of Doctors / MOQ</th>
          <th>Cost Option 1</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="section-header" colspan="5">ST Solutions 3. Meeting Demand for Evidence & Value</td></tr>
        <tr>
          <td><input type="checkbox" class="service-checkbox" data-service-id="3.1"> 3.1</td>
          <td><strong>Advisory Board & Focus Group Meetings (Hybrid)</strong></td>
          <td>
            <strong>End-to-End Management:</strong>
            <ul>
              <li>AV setup, live sessions at multiple locations, and pre- & post-event engagement.</li>
            </ul>
          </td>
          <td>
            <strong>Event Coverage:</strong><br>
            Minimum 5 events per year, including 1 main event location and 10+ additional physical locations
          </td>
          <td>45 lac</td>
        </tr>
        <tr>
          <td><input type="checkbox" class="service-checkbox" data-service-id="3.2"> 3.2</td>
          <td><strong>Physical CME Coverage at multiple locations</strong></td>
          <td>
            <strong>End-to-End Management:</strong>
            <ul>
              <li>AV setup, live sessions at multiple locations, and pre- & post-event engagement.</li>
            </ul>
          </td>
          <td>100 CME of the Year</td>
          <td>50 lac</td>
        </tr>
        <tr class="impact-row">
          <td colspan="5"><strong>Impact:</strong> Builds scientific trust and credibility with prescribers.</td>
        </tr>
      </tbody>
    </table>`;

  const tableHTML3 = `
    <table class="pdf-table" aria-labelledby="modal-title">
      <thead>
        <tr>
          <th>Select Service</th>
          <th>Services and Platforms</th>
          <th>Scope and Description</th>
          <th>Frequency / Total No. of Doctors / MOQ</th>
          <th>Cost Option 1</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="section-header" colspan="5">ST Solutions 4. Bridging Digital Transformation Gaps</td></tr>
        <tr>
          <td><input type="checkbox" class="service-checkbox" data-service-id="4.1"> 4.1</td>
          <td><strong>Enterprise Solution for HCP Engagement & Patient Retention Platform</strong></td>
          <td>
            <strong>For HCPs:</strong>
            <ul>
              <li>Ready-to-use personalized content</li>
              <li>Research articles and trial summaries</li>
              <li>Journal articles and blogs</li>
              <li>Guidelines and algorithms</li>
              <li>Conference updates</li>
            </ul>
            <strong>For Patients:</strong>
            <ul>
              <li><strong>Health Tracker:</strong> Dose, vitals, symptoms, and disease diary</li>
              <li><strong>Educational Videos</strong> for awareness and guidance</li>
            </ul>
          </td>
          <td></td>
          <td>10 lac</td>
        </tr>
        <tr>
          <td><input type="checkbox" class="service-checkbox" data-service-id="4.2"> 4.2</td>
          <td><strong>AI-Driven Recommendation Engine -</strong><br>Delivers content tailored to doctor’s specialty and interests.</td>
          <td>
            <strong>MedxShot:</strong> Quick news updates across specialties, along with clinical and patient-driven content and resources
          </td>
          <td></td>
          <td>10 lac</td>
        </tr>
        <tr>
          <td><input type="checkbox" class="service-checkbox" data-service-id="4.3"> 4.3</td>
          <td><strong>Enterprise Solution for Rep–HCP Engagement -</strong><br>by Rx Tracker, Sampling, Promotogram, and Gratitude tools</td>
          <td>Rep based login – Features of Sales force effectiveness + dashboard + user analytics + Gratitude</td>
          <td></td>
          <td>8 lac</td>
        </tr>
        <tr>
          <td><input type="checkbox" class="service-checkbox" data-service-id="4.4"> 4.4</td>
          <td><strong>Enterprise Solution for Performance Management Systems (PMS) & surveys for Medical Science Liaisons (MSLs) -</strong></td>
          <td>
            <strong>One-Stop PMS Solution:</strong><br>
            It covers surveys, rep-wise, doctor-wise, city-wise, study-wise, and survey-wise analytics, providing ready-to-publish data compliant with industry standards.
          </td>
          <td></td>
          <td>10 lac</td>
        </tr>
        <tr>
          <td><input type="checkbox" class="service-checkbox" data-service-id="4.5"> 4.5</td>
          <td><strong>Personalized Microsites for Doctors -</strong></td>
          <td>
            <strong>Know Your Doctors:</strong>
            <ul>
              <li>Highlights achievements and recognitions, clinic details, disease information in regional languages, and social media integrations.</li>
            </ul>
          </td>
          <td>
            <strong>Support Package:</strong><br>
            Minimum 1,000 doctors with 12 months of dedicated support
          </td>
          <td>30 Lac</td>
        </tr>
        <tr class="impact-row">
          <td colspan="5"><strong>Impact:</strong> Ensures consistency, personalization, and scale in doctor & patient communication.</td>
        </tr>
      </tbody>
    </table>`;

  const tableHTML4 = `
    <table class="pdf-table" aria-labelledby="modal-title">
      <thead>
        <tr>
          <th>Select Service</th>
          <th>Services and Platforms</th>
          <th>Scope and Description</th>
          <th>Frequency / Total No. of Doctors / MOQ</th>
          <th>Cost Option 1</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="section-header" colspan="5">ST Solutions 5. Staying Compliant with Regulations</td></tr>
        <tr>
          <td><input type="checkbox" class="service-checkbox" data-service-id="5.1"> 5.1</td>
          <td>
            <strong>Patient Awareness Livestream Campaigns -</strong><br>Examples: World Diabetes Day, Men’s Health Month<br><br>
            <strong>Anonymous Doctor-Patient Q&A Forums -</strong><br>Focus: Educational discussions (strictly non-promotional)<br><br>
            <strong>Live Workshops on Lifestyle, Adherence, and Disease Prevention -</strong><br>Format: Doctors act as educators
          </td>
          <td>
            <strong>Social Media Live - Pre; During & Post Support:</strong><br>
            Includes content creation and dedicated online support during assigned slots and throughout the campaign months. A unique initiative by SwarnimTouch
          </td>
          <td>6-Month Campaign – Minimum 500 Doctors Live</td>
          <td>13 lac</td>
        </tr>
        <tr>
          <td><input type="checkbox" class="service-checkbox" data-service-id="5.2"> 5.2</td>
          <td>
            <strong>On-Demand by Doctor:</strong>
            <ul>
              <li>Doctors can select their preferred time slots anytime during the campaign duration</li>
              <li>Doctors can choose the topic of their session during the campaign</li>
            </ul>
          </td>
          <td>
            <strong>Today's Challenge:</strong><br>
            Every doctor wants to go live, but often lacks a dedicated agency or support from pharma to manage sessions on their preferred time and requirements.
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr class="impact-row">
          <td colspan="5"><strong>Impact:</strong> Compliance-friendly, educational, and brand-building.</td>
        </tr>
      </tbody>
    </table>`;

  const tableHTMLs = [
    tableHTML0,
    tableHTML1,
    tableHTML2,
    tableHTML3,
    tableHTML4,
  ];

  const serviceQuestions = {
    1.1: [
      "How many doctor logins do you need?",
      "How many pre-loaded reels are required?",
      "How many personalized frames do you prefer?",
      "What subscription duration works best for you?",
    ],
    1.2: [
      "What is the minimum number of doctors?",
      "Preferred campaign duration?",
      "Preferred Video Reel duration?",
    ],
    1.3: [
      "Per year frequency of Video Reels?",
      "How many doctors to engage?",
      "How many rep logins needed?",
    ],
    1.4: [
      "Who is the target audience for the platform?",
      "How often will webinars be conducted?",
      "Do you need custom branding (logo, colors, certificate)?",
      "How should pre-read materials be organized?",
    ],
    1.5: [
      "Which sections do you want in the hub?",
      "Need custom design/branding?",
      "Expected number of users at once?",
      "What expert content do you need?",
    ],
    1.6: [
      "What type of gamification do you prefer (quizzes, challenges, etc.)?",
      "Any specific campaign concepts you want?",
      "How many reps and doctors will use the system?",
      "What key metrics do you want in the dashboard?",
    ],
    2.1: [
      "What type of podcast content do you want (interviews, discussions, case studies)?",
      "Do you need custom host branding?",
      "How many episodes do you plan to produce?",
      "Do you want live streaming or recorded only?",
    ],
    2.2: [
      "What topics should the expert forums cover?",
      "Do you need branded community design?",
      "How many active members do you expect?",
      "Live discussions or only on-demand content?",
    ],
    2.3: [
      "What products will be launched?",
      "Do you want fully live or pre-recorded demos?",
      "Need custom 3D product models?",
      "Expected audience size for the event?",
    ],
    3.1: [
      "How many locations will participate in the hybrid meeting?",
      "What type of AV setup do you require (live streaming, recording, presentations)?",
      "Do you need pre-event and post-event reports?",
      "How many participants are expected overall?",
    ],
    3.2: [
      "How many locations need coverage?",
      "What AV setup is required (live streaming, recording, presentations)?",
      "Do you need pre-event and post-event reports?",
      "How many attendees per location?",
    ],
    3.3: [
      "Do you prefer live webinars or social media live sessions?",
      "How many sessions are planned in the series?",
      "Who will be the speakers (specialists, doctors)?",
      "Do you need interactive features (Q&A, polls)?",
    ],
    4.1: [
      "What key content do you want for HCPs (articles, trials, blogs)?",
      "What patient tracking features are most important (dose, symptoms, diary)?",
      "Do you need personalized content per HCP?",
      "How often should content be updated (real-time, monthly)?",
    ],
    4.2: [
      "Which specialties should the engine cover?",
      "What type of content should be recommended (news, clinical cases, patient resources)?",
      "Do you want recommendations to update in real-time or periodically?",
      "Should doctors be able to customize their interests manually?",
    ],
    4.3: [
      "What key features do you want for reps (Rx Tracker, sampling, Promotogram)?",
      "Do you need a custom analytics dashboard per rep?",
      "What type of gratitude system do you want (points, rewards, certificates)?",
      "How many reps and HCPs will use the system?",
    ],
    4.4: [
      "What types of surveys and PMS data do you want to track?",
      "Do you need filters by rep, doctor, city, or study?",
      "Should data be ready-to-publish on compliance standards?",
      "How frequently will surveys be conducted?",
    ],
    4.5: [
      "What content should each microsite include (achievements, clinic info, disease info)?",
      "Do you need regional language support?",
      "Any specific design or branding requirements for the microsites?",
      "How many doctors’ microsites need to be launched initially?",
    ],
    5.1: [
      "What topics should the livestream campaigns cover?",
      "Do you want anonymous Q&A for patients?",
      "Which social media platforms should be used?",
      "How many sessions are planned and their frequency?",
    ],
    5.2: [
      "How long is the campaign duration?",
      "How many doctors will participate?",
      "Do you want real-time booking or pre-scheduled slots?",
      "Any limits on the number of slots per doctor?",
    ],
    5.3: [
      "How many topics can each doctor choose?",
      "Are there any preferred topic categories?",
      "Will sessions be live only or recorded too?",
      "How will topics be reviewed or approved?",
    ],
  };

  document.addEventListener("DOMContentLoaded", function () {
    const solutionBoxes = Array.from(
      document.querySelectorAll(".solution-box")
    );
    const modal = document.getElementById("solution-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-description");
    const modalPanel = modal.querySelector(".modal-panel");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const addRemarksBtn = document.getElementById("add-remarks-btn");
    const remarksModal = document.getElementById("remarks-modal");
    const remarksText = document.getElementById("remarks-text");
    const remarksSend = document.getElementById("remarks-send");
    const remarksCancel = document.getElementById("remarks-cancel");
    const questionsModal = document.getElementById("questions-modal");
    const questionsForm = document.getElementById("questions-form");
    const questionsSubmitBtn = document.getElementById("questions-submit-btn");
    const questionsCancelBtn = document.getElementById("questions-cancel-btn");
    let activeCheckbox = null;

    function openModal(idx) {
      const box = solutionBoxes[idx];
      const titleFromDOM = box.querySelector("h2").textContent.trim();
      modalTitle.textContent = titleFromDOM;
      if (tableHTMLs[idx]) {
        modalPanel.classList.add("fullwidth");
        modalDesc.innerHTML = tableHTMLs[idx];
      } else {
        modalPanel.classList.remove("fullwidth");
        modalDesc.textContent = "Description not provided.";
      }
      modal.setAttribute("aria-hidden", "false");
      modalPanel.scrollTop = 0;
      setTimeout(() => modalPanel.focus(), 10);
      if (remarksModal) remarksModal.setAttribute("aria-hidden", "true");
    }

    function closeModal() {
      modal.setAttribute("aria-hidden", "true");
      modalDesc.innerHTML = "";
      modalPanel.classList.remove("fullwidth");
      if (remarksModal) remarksModal.setAttribute("aria-hidden", "true");
    }

    function openQuestionsModal(questions) {
      let formHTML = "";
      questions.forEach((q, index) => {
        const inputId = `q-input-${index}`;
        formHTML += `
                <div>
                    <label for="${inputId}">${escapeHtml(q)}</label>
                    <input type="text" id="${inputId}" name="${inputId}" required>
                </div>
            `;
      });
      questionsForm.innerHTML = formHTML;
      questionsModal.setAttribute("aria-hidden", "false");
      setTimeout(() => questionsForm.querySelector("input")?.focus(), 50);
    }

    function closeQuestionsModal() {
      if (activeCheckbox) {
        activeCheckbox.checked = false;
        activeCheckbox = null;
      }
      questionsModal.setAttribute("aria-hidden", "true");
      questionsForm.innerHTML = "";
    }

    function submitQuestions() {
      const formData = new FormData(questionsForm);
      console.log("--- Form Submitted ---");
      for (let [key, value] of formData.entries()) {
        const label = document.querySelector(`label[for="${key}"]`).textContent;
        console.log(`${label}: ${value}`);
      }
      activeCheckbox = null;
      questionsModal.setAttribute("aria-hidden", "true");
      questionsForm.innerHTML = "";
      alert("Details submitted successfully! (Check console for data)");
    }

    solutionBoxes.forEach((box, idx) => {
      const container = box.querySelector(".image-container");
      if (container) {
        container.addEventListener("click", () => openModal(idx));
        container.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openModal(idx);
          }
        });
      }
    });

    modalDesc.addEventListener("change", function (e) {
      if (e.target.matches(".service-checkbox") && e.target.checked) {
        activeCheckbox = e.target;
        const serviceId = e.target.dataset.serviceId;
        const questions = serviceQuestions[serviceId];
        if (questions) {
          openQuestionsModal(questions);
        } else {
          alert("No additional details are required for this service.");
          e.target.checked = false;
          activeCheckbox = null;
        }
      }
    });

    document.addEventListener("click", (e) => {
      if (e.target.dataset.action === "backdrop") closeModal();
      if (e.target.dataset.action === "close-questions") closeQuestionsModal();
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
    if (questionsCancelBtn)
      questionsCancelBtn.addEventListener("click", closeQuestionsModal);
    if (questionsSubmitBtn)
      questionsSubmitBtn.addEventListener("click", submitQuestions);

    function openRemarksModal() {
      if (!modal || modal.getAttribute("aria-hidden") === "true") return;
      if (remarksModal) {
        remarksModal.setAttribute("aria-hidden", "false");
        setTimeout(() => remarksText?.focus(), 50);
      }
    }

    function closeRemarksModal() {
      if (remarksModal) {
        remarksModal.setAttribute("aria-hidden", "true");
        if (remarksText) remarksText.value = "";
        setTimeout(() => addRemarksBtn?.focus(), 10);
      }
    }

    function sendRemark() {
      if (!remarksText) return;
      const txt = remarksText.value.trim();
      if (txt.length === 0) {
        remarksText.focus();
        return;
      }
      const remarkWrap = document.createElement("div");
      remarkWrap.className = "remark-entry";
      remarkWrap.style.cssText =
        "padding: 10px; border: 1px solid #ddd; margin-top: 15px; border-radius: 5px; background: #f9f9f9;";
      const time = new Date().toLocaleString("en-IN");
      remarkWrap.innerHTML = `<strong>Remark (${time}):</strong><div style="margin-top:6px; white-space:pre-wrap;">${escapeHtml(
        txt
      )}</div>`;
      modalDesc.appendChild(remarkWrap);
      closeRemarksModal();
    }

    if (addRemarksBtn)
      addRemarksBtn.addEventListener("click", openRemarksModal);
    if (remarksCancel)
      remarksCancel.addEventListener("click", closeRemarksModal);
    if (remarksSend) remarksSend.addEventListener("click", sendRemark);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (questionsModal.getAttribute("aria-hidden") === "false") {
          closeQuestionsModal();
        } else if (remarksModal.getAttribute("aria-hidden") === "false") {
          closeRemarksModal();
        } else if (modal.getAttribute("aria-hidden") === "false") {
          closeModal();
        }
      }
    });
  });
})();
