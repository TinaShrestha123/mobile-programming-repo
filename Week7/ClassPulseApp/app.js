// ================================
// APP STATE
// ================================

let loggedInEmail = "";

let dashboardData = {
  responses: 0,
  students: 0,

  topics: {},

  speedAverage: 0,
  difficultyAverage: 0,
};

let totalSpeed = 0;
let totalDifficulty = 0;

// ================================
// PAGE NAVIGATION
// ================================

window.showPage = function (pageId) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));

  document.getElementById(pageId).classList.add("active");

  const menu = document.getElementById("sideMenu");
  if (menu) menu.classList.remove("active");
};

// ================================
// LOGIN
// ================================

window.login = function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please enter email and password.");
    return;
  }

  loggedInEmail = email;
  document.getElementById("teacherEmail").textContent = loggedInEmail;

  alert("Login Successful!");
  showPage("dashboardPage");
};

// ================================
// CREATE ACCOUNT
// ================================

window.createAccount = function () {
  alert("Registration page coming soon.");
};

// ================================
// SIDE MENU
// ================================

window.openMenu = function () {
  document.getElementById("sideMenu").classList.toggle("active");
};

// ================================
// ADD TOPIC
// ================================

window.addTopic = function () {
  const name = document.getElementById("newTopicName").value.trim();

  if (!name) {
    alert("Enter a topic name");
    return;
  }

  if (dashboardData.topics[name]) {
    alert("Topic already exists");
    return;
  }

  dashboardData.topics[name] = {
    total: 0,
    count: 0,
  };

  document.getElementById("newTopicName").value = "";

  renderTopics();
  updateWeakTopic();

  alert("Topic added successfully!");
};

// ================================
// CALCULATE TOPIC PERCENT
// ================================

function calculateTopicPercent(topic) {
  const data = dashboardData.topics[topic];

  if (!data || data.count === 0) return 0;

  return Math.round((data.total / (data.count * 5)) * 100);
}

// ================================
// RENDER TOPICS
// ================================

function renderTopics() {
  const dash = document.getElementById("topicContainer");
  const feed = document.getElementById("topicFeedbackContainer");

  if (!dash || !feed) return;

  dash.innerHTML = "";
  feed.innerHTML = "";

  Object.keys(dashboardData.topics).forEach((topic) => {
    const percent = calculateTopicPercent(topic);

    let levelClass = "high";

    if (percent < 40) {
      levelClass = "low";
    } else if (percent < 70) {
      levelClass = "medium";
    }

    // DASHBOARD TOPIC CARD

    dash.innerHTML += `
      <div class="topic">

        <div class="topic-name">
          ${topic}
        </div>

        <div class="topic-percent">
          ${percent}%
        </div>

        <div class="progress">
          <div
            class="progress-fill ${levelClass}"
            style="width:${percent}%"
          ></div>
        </div>

      </div>
    `;

    // FEEDBACK SLIDER

    feed.innerHTML += `
      <div style="margin-bottom:15px;">
        <label>${topic}</label>

        <input
          type="range"
          min="1"
          max="5"
          value="3"
          class="topic-slider"
          data-topic="${topic}"
        >

        <span>3</span>
      </div>
    `;
  });

  // Live slider update

  document.querySelectorAll(".topic-slider").forEach((slider) => {
    slider.addEventListener("input", function () {
      this.nextElementSibling.textContent = this.value;
    });
  });
}

// ================================
// FEEDBACK SUBMISSION
// ================================

window.submitFeedback = function () {
  const understanding = document.querySelector(
    'input[name="understanding"]:checked',
  );

  const speed = document.querySelector('input[name="speed"]:checked');

  const difficulty = document.querySelector('input[name="difficulty"]:checked');

  if (!understanding || !speed || !difficulty) {
    alert("Please complete all basic feedback.");
    return;
  }

  dashboardData.responses++;

  totalSpeed += parseInt(speed.value);
  totalDifficulty += parseInt(difficulty.value);

  dashboardData.speedAverage = totalSpeed / dashboardData.responses;

  dashboardData.difficultyAverage = totalDifficulty / dashboardData.responses;

  // Topic ratings

  document.querySelectorAll(".topic-slider").forEach((slider) => {
    const topic = slider.dataset.topic;
    const value = parseInt(slider.value);

    dashboardData.topics[topic].total += value;
    dashboardData.topics[topic].count += 1;
  });

  updateDashboard();

  alert("Feedback Submitted Successfully!");
  showPage("dashboardPage");
};

// ================================
// UPDATE DASHBOARD
// ================================

function updateDashboard() {
  document.getElementById("responses").textContent = dashboardData.responses;

  document.getElementById("students").textContent = dashboardData.responses;

  document.getElementById("speedAverage").textContent =
    dashboardData.speedAverage.toFixed(1) + " / 5";

  document.getElementById("difficultyAverage").textContent =
    dashboardData.difficultyAverage.toFixed(1) + " / 5";

  renderTopics();
  updateWeakTopic();
}

// ================================
// WEAK TOPIC
// ================================

function updateWeakTopic() {
  const topics = dashboardData.topics;
  const keys = Object.keys(topics);

  if (keys.length === 0) {
    document.getElementById("weakTopicName").textContent = "No Topics";

    document.getElementById("weakTopicPercentage").textContent = "0%";

    return;
  }

  const weakest = keys.reduce((a, b) =>
    calculateTopicPercent(a) < calculateTopicPercent(b) ? a : b,
  );

  const percent = calculateTopicPercent(weakest);

  document.getElementById("weakTopicName").textContent = weakest;

  document.getElementById("weakTopicPercentage").textContent = percent + "%";
}

// ================================
// MARK REVIEWED
// ================================

window.markReviewed = function () {
  alert("Topic marked as reviewed.");
  showPage("dashboardPage");
};

// ================================
// NOTIFICATIONS
// ================================

window.showNotifications = function () {
  showPage("notificationPage");
};

// ================================
// PROFILE EDIT
// ================================

window.editProfile = function () {
  const name = prompt("Enter Name:");
  const status = prompt("Enter Status:");
  const subject = prompt("Enter Subject:");

  if (name) document.getElementById("teacherName").textContent = name;

  if (status) document.getElementById("teacherStatus").textContent = status;

  if (subject) document.getElementById("teacherSubject").textContent = subject;

  alert("Profile Updated!");
};

// ================================
// LOGOUT
// ================================

window.logout = function () {
  if (!confirm("Are you sure you want to logout?")) return;

  loggedInEmail = "";

  document.getElementById("email").value = "";
  document.getElementById("password").value = "";

  document.getElementById("teacherEmail").textContent = "Not Logged In";

  document.getElementById("teacherName").textContent = "Enter your name";

  document.getElementById("teacherStatus").textContent = "Enter your status";

  document.getElementById("teacherSubject").textContent = "Enter your subject";

  showPage("loginPage");
};

// ================================
// INIT
// ================================

document.addEventListener("DOMContentLoaded", function () {
  renderTopics();
  updateDashboard();
});
