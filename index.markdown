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
Hi, my name is Alexander! I am a PhD student at Constructor University, Bremen. My research is mainly focused on Deep Learning methods in Natural Language Processing. For the last few years, I have been studying methods for adapting diffusion models to discrete domains, such as text or code, where diffusion models can provide a more human-like text generation pattern. I am trying to understand how the latent space of text differs from the space of images, where diffusion models are the current state-of-the-art approach, and to find ways to minimize this difference. I am also very interested in the progress of LLMs and I share what I learn by teaching the NLP course at HSE University and also by writing reviews here.
</p>

<p style="text-align: justify">
Since 2021, I have been working in the Bayesian Methods Research Group under the supervision of Dmitry Vetrov. I've received both BSc and MSc degrees from the Faculty of Computer Science at HSE University.
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