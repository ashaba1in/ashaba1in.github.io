---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
---


<p style="font-size: 42px">
About me
</p>

<div class="home">
  {%- if page.title -%}
    <h1 class="page-heading">{{ page.title }}</h1>
  {%- endif -%}
  <img src="/assets/img.png" style="width:25%; border-radius: 2.5%; float: right; margin-left: 1em">
</div>

<p style="text-align: justify">
Hi, my name is Alexander! I am a PhD student at <a href="https://constructor.university/">Constructor University</a>, Bremen. My research is mainly focused on Deep Learning methods in Natural Language Processing. For the last few years, I have been working on adaptation of diffusion models to discrete domains, such as text or code. I am trying to understand how the text-based latent space differs from the image latent space, and to find ways to minimize this difference. I am very interested in the progress of LLMs and I share what I learn by teaching the <a href="https://github.com/ashaba1in/hse-nlp">NLP course</a> at HSE University and also by writing reviews here.
</p>

<p style="text-align: justify">
Since 2021, I have been working at the <a href="https://bayesgroup.org/">Bayesian Methods Research Group</a> under the supervision of <a href="https://scholar.google.com/citations?user=7HU0UoUAAAAJ&hl=en">Dmitry Vetrov</a>. I've received both BSc and MSc degrees from the <a href="https://cs.hse.ru/en/">Faculty of Computer Science</a> at HSE University. During my undergrad, I worked at <a href="https://yandex.com/company/">Yandex</a> on the recommendation systems and at <a href="https://cs.hse.ru/en/ai/clst/computational-pragmatics/">HSE lab</a> on the word sense induction problem.
</p>

<p style="text-align: justify">
If you have questions about my work or you just want to chat, please feel free to reach me via <a href="mailto:ashabalin9999@gmail.com">email</a>. I will be happy to answer any questions!
</p>

&nbsp;

# Publications

<div class="publication" id="year-2025" style="display: block; margin-top:-20px">
    <button class="toggle-button" onclick="toggleArrow('2025')"></button>
    <div class="year-content" id="content-2025" style="display: block;">
        {% bibliography --query @*[year=2025] %}
    </div>
</div>

<div class="publication" id="year-2024" style="display: block; margin-top:-20px">
    <button class="toggle-button" onclick="toggleArrow('2024')"></button>
    <div class="year-content" id="content-2024" style="display: block;">
        {% bibliography --query @*[year=2024] %}
    </div>
</div>

<div class="publication" id="year-2023" style="display: block; margin-top:-20px">
    <button class="toggle-button" onclick="toggleArrow('2023')"></button>
    <div class="year-content" id="content-2025" style="display: block;">
        {% bibliography --query @*[year=2023] %}
    </div>
</div>