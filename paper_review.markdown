---
layout: page
title: Paper Reviews
permalink: /paper_review/
---

This is a page with short summaries of some papers I have read. They are mostly for my personal use, but I'll be glad if someone finds them helpful.

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}, {{post.tag}}</a>
    </li>
  {% endfor %}
</ul>