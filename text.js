const terminal = `<span id="a">souradeep@saha</span>:<span id="b">~</span><span id="c">$</span>`;
const email = "s54saha@uwaterloo.ca";

const text = `${terminal} cd projects/about-me
${terminal} npm start

<span class="gray">
  > souradeepsaha@1.0.0 start /projects/about-me
  > node ./bin/www
</span>


Hey, nice to meet you! I am <span class="blue"><strong>Souradeep Saha</strong></span>

I'm a junior majoring in Computer Science at the <span class="purple"><strong>University of Waterloo</strong></span>. Some of my relevant coursework include Operating Systems,
Distributed Systems, Computer Security and Networking. I'm planning to graduate during Winter 2024.

I'm currently looking for Spring and Fall 2023 internships!

Previously, I've worked at <span class="green"><strong>Instinet Incorporated</strong></span> during Spring 2022 as a Site Reliability Engineering Intern, working on the migration of on-premises infrastructure to AWS,
and managed underutilized cloud resources. As a result, I've cut monthly expenses by at least $25,000!
I've utilized knowledge in AWS CloudFormation, GitLab pipelines, Python and other DevOps principles during my work. I'm also an AWS Certified Cloud Practitioner!

During Fall 2021, I worked at <span class="green"><strong>Paphus Solutions</strong></span> as a Software Developer Intern, integrating Facebook and Instagram messenger support with an opne-source AI Chatbot server, BotLibre.
I've utilized knowledge in Java, REST Server, AI/ML Scripting among other technologies.


Besides coding, some of my intersts include working out, riding my bicycle, and learning French!


Currently, I'm working on a <span class="orange">trading bot</span> using <span class="yellow">python, </span><span class="red">alphavantage, </span><span class="pink">and OANDA API.</span> I've built the following projects in the past:

UWPath, a <a href="/">course planner</a> for University of Waterloo students.
ArtShow, an <a href="/">online platform</a> for students to showcase their artwork using HTML/CSS/JavaScript.
Scribr, a <a href="/">chrome extension</a> which automatically records and summarizes online lecture notes

..And much more! You can see all of them <a href="https://github.com/SouradeepSaha">here</a>


You can take a look at my other profiles here:

<a href="https://www.linkedin.com/in/Souradeep-Saha/">LinkedIn</a>
<a href="https://github.com/SouradeepSaha">GitHub</a>
<a href="https://stackoverflow.com/users/5793816/souradeep-saha">Stackoverflow</a>

If you want to get in touch with me, feel free to shoot me an email at <a mailto=${email}>${email}</a>.

<p>Have an amazing day!</p>
${terminal} `;

export default text;
