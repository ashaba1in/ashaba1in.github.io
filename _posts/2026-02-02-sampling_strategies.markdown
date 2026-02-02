---
layout: post
long_title: "Sampling Strategies"
title: "Sampling Strategies"
date: 2026-02-02 16:09:34 +0100
categories: definitions
tag: ""
show_link: false
---

<script type="text/javascript" async
 src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

One of the main problems of Masked Diffusion Models is that the probability of the original token sequence is factorised: $$p(x^{1:n} \mid x_t^{1:n}) = \prod_{i=1}^n p(x^i \mid x_t^{1:n})$$. This assumption leads to incorrect sampling when multiple tokens are sampled at one step, as they are treated independently by the model.

Multiple papers propose different strategies to mitigate this issue:

1. [Self-Speculative Masked Diffusions, DeepMind, 2025](https://arxiv.org/pdf/2510.03929)