---
layout: post
long_title: "Any-Order Autoregressive Models"
title: "Any-Order Autoregressive Models"
date: 2026-02-02 16:09:34 +0100
categories: definitions
tag: ""
show_link: false
---

<script type="text/javascript" async
 src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

**Any-Order Autoregressive Models (AO-ARM)** is a concept of autoregressive models that support a generation of tokens in an arbitrary order. The primal advantage of AO-ARMs over MDMs is an absence of probability factorization. 

$$
p(x_{1:n}) = \prod_{i=1}^n p(x_{\sigma(i)} \mid x_{\sigma(<i)}),
$$
where $$\sigma$$ is a random permutation of token positions.

This formulation allows models to go beyond left-to-right sampling while keeping the model's probability function correct. Note that AO-ARMs and basically equivalent to MDMs when sampling one token at a time. During the sampling the permutation $$\sigma$$ is usually sampled in advance and do not change during the generation.

**Papers:**

1. [XLNet: Generalized Autoregressive Pretraining for Language Understanding, Google, 2020](https://arxiv.org/pdf/1906.08237)
2. [Autoregressive Diffusion Models, Google, 2021](https://arxiv.org/pdf/2110.02037)
3. [Training and Inference on Any-Order Autoregressive Models the Right Way, Stanford, 2022](https://arxiv.org/pdf/2205.13554)
4. [Your absorbing discrete diffusion
secretly models the conditional distributions of clean data, Gaoling, 2025](https://arxiv.org/pdf/2406.03736)