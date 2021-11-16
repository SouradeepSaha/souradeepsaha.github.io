const terminal = `<span id="a">souradeep@saha</span>:<span id="b">~</span><span id="c">$</span>`;
const email = "s54saha@uwaterloo.ca";

const text = `${terminal} cd projects/about-me
${terminal} npm start

<span class="gray">
  > souradeepsaha@1.0.0 start /projects/about-me
  > node ./bin/www
</span>


Hey, nice to meet you! I am <span class="blue"><strong>Souradeep Saha</strong></span>

I graduated from <span class="purple"><strong>Danforth Collegiate and Technical Institute</strong></span> (2020) and I'm a sophormone studying Computer Science @ <span class="purple"><strong>University of Waterloo</strong></span>


I'm currently working at Paphus Solutions (Ottawa-based startup, remote) as a software developer intern until December 2022. I'm also looking for summer 2022 internship opportunities!


Besides coding, some of my intersts include working out, riding my bicycle, and learning French!


Currently, I'm working on a <span class="orange">trading bot</span> using <span class="yellow">python, </span><span class="red">alphavantage, </span><span class="pink">and OANDA API.</span> I've built the following projects in the past:

An <a href="/">online platform</a> for students to showcase their artwork using the plain HTML, CSS, JavaScript and some libraries.
A <a href="/">chrome extension</a> which automatically records and summarizes online lecture notes

..And much more! You can see all of them <a href="/">here</a>


You can take a look at my other profiles here:

<a href="https://www.linkedin.com/in/Souradeep-Saha/">LinkedIn</a>
<a href="https://github.com/SouradeepSaha">GitHub</a>
<a href="https://stackoverflow.com/users/5793816/souradeep-saha">Stackoverflow</a>

If you want to get in touch with me, feel free to shoot me an email at <a mailto=${email}>${email}</a>.

<p>Have an amazing day!</p>
${terminal} `;

export default text;
