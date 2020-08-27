const terminal = `<span id="a">souradeep@saha</span>:<span id="b">~</span><span id="c">$</span>`;
const email = "sahasouradeep01@gmail.com";

const text = `${terminal} cd projects/about-me
${terminal} npm start

<span class="gray">
  > souradeepsaha@1.0.0 start /projects/about-me
  > node ./bin/www
</span>


Hey, nice to meet you! I am <span class="blue"><strong>Souradeep Saha</strong></span>

I graduated from <span class="purple"><strong>Danforth Collegiate and Technical Institute</strong></span> (2020) and I'm currently a freshman studying Computer Science @ <span class="purple"><strong>University of Waterloo</strong></span>


Some of my intersts include playing pong, drawing, riding my bicycle and coding.


Currently, I'm working on a <span class="orange">trading bot</span> using <span class="yellow">python, </span><span class="red">alphavantage, </span><span class="pink">and FXCM.</span> I've built the following projects in the past:

An <a href="/">online platform</a> for students to sell and distribute their artwork using the MERN stack
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
