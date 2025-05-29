---
layout: page
title: Paper Reviews
permalink: /paper_review/
---

This is a page with short summaries of some papers I have read. They are mostly for my personal use, but I'll be glad if someone finds them helpful.

### Interactive graph with all reviewed topics and papers

<div id="graph"></div>

<!-- Optional style -->
<style>
  #graph {
    width: 100%;
    height: 500px;
    margin-top: 0px;
  }
</style>

<!-- Include D3 and the graph script -->
<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="{{ '/assets/js/graph.js' | relative_url }}"></script>

### List of reviewed papers

<ul>
  {% for post in site.posts %}
    {% if post.show_link %}
        <li>
          <a href="{{ post.url }}">{{post.long_title}}</a>
        </li>
    {% endif %}
  {% endfor %}
</ul>
