---
layout: post
long_title: "Discrete Diffusion Models"
title: "Discrete Diffusion Models"
date: 2026-02-02 16:09:34 +0100
categories: definitions
tag: ""
show_link: false
---

<script type="text/javascript" async
 src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

**Masked Diffusion Models (MDM)** adapt the diffusion models to text by replacing Gaussian noise with categorical. In the basic form, they corrupt a text by masking a fraction of tokens, thus loosing some information. The fraction increases (linearly in most cases) with respect to timestep $$t$$. Therefore, a prior distribution is defined as $$q(x) = \delta(x = [M])$$. 
The forward (noising) process is defined through a transition matrix $$Q$$ of size $$(m+1) \times (m+1)$$: $$Q_i = (1 - \beta_i) I + \beta_i \mathbf{1}e_m^{\top}$$. This matrix defines the state transition between $$[s(i), t(i)]$$, where $$s(i) = \frac{i - 1}{T}, t(i) = \frac{i}{T}$$. 

$$q(x_{t(i)} | x_{s(i)}) = \operatorname{Cat}(x_{t(i)}; Q_i^{\top}x_{s(i)}) = x^{\top}_{s(i)} Q_i x_{t(i)}$$

We can also define a one-step sampling of $$x_{t(i)}$$.

$$q(x_{t(i)} | x_{s(i)}) = \operatorname{Cat}(x_{t(i)}; \bar{Q}_i^{\top}x_{0}) = x^{\top}_{0} Q_i x_{t(i)},$$

where $$\bar{Q}_i = \prod_{j = 1}^i Q_j = \alpha_i I + (1 - \alpha_i)\mathbf{1}e_m^{\top}$$ for $$\alpha_i = \prod_{j = 1}^i (1 - \beta_j)$$.

Another important way of looking at MDMs is through Kolmogorov equations.

### Kolmogorov equations

Let $$p_{ij}(t) = p(x_t = j | x_0 = i)$$ be a probability of transitioning from state $$i$$ to state $$j$$ within a time period $$t$$. $$p_{ij}(t)$$ satisfy the following properties:
1. Probability: $$p_{ij}(t) \ge 0, \; \sum_{j} p_{ij} = 1 \;\; \forall i, j$$
2. Stationarity: $$p_{ij}(0) = \delta_{ij} = \begin{cases}
1, & i = j,\\
0, & i \neq j\end{cases}$$
3. Markov property: $$p_{ij}(t + s) = \sum_{k} p_{ik}(t)p_{kj}(s)$$
4. Stochastic continuity: $$p($$&#124;$$ x_{t+h} - x_t $$&#124;$$ > \varepsilon) \to 0$$ or $$\lim_{t \to 0} p_{ij}(t) = 0$$

Let the following limit exist: $$q_{ij} = \lim_{h \to 0} \frac{p_{ij}(h) - \delta_{ij}}{h}$$

It is easy to see that $$\sum_{k} q_{ik} = 0$$. Indeed, 

$$\sum_{k} q_{ik} = \lim_{h \to 0} \sum_{k} \frac{p_{ik}(h) - \delta_{ik}}{h} = \lim_{h \to 0} \frac{1}{h} \bigg(\sum_{k} p_{ik}(h) - 1\bigg) = 0$$

Also let $$p_{ij}(t)$$ be differentiable. Then,

$$p'_{ij}(t) = \sum_{k} p_{ik}(t) q_{kj}$$

This equation is called the **Kolmogorov forward equation** and it can be derived from the Markov property of $$p_{ij}(t)$$.

$$
p'_{ij}(t) = \lim_{h \to 0} \frac{p_{ij}(t + h) - p_{ij}(t)}{h} = \lim_{h \to 0} \sum_k p_{ik}(t)\frac{p_{kj}(h) - p_{kj}(0)}{h} = \sum_{k} p_{ik}(t) q_{kj}
$$

This reads as the rate of the probability change from one state to another for a particular time $$t$$ is equal to the sum of transition probabilities to all states at that time multiplies by the instant probability change rate. So, to calculate how fast does probability change, we accumulate the weighted speeds of probability change for all possible paths.

### Matrix exponentials

All these facts can be written with a matrix notation.

Let $$P(t) = \left\{ p_{ij}(t) \right\}_{i,j}$$ to be a _transition (stochastic) matrix_ and $$Q = \left\{ q_{ij} \right\}_{i,j}$$ to be a _transition rate matrix_. Then $$P'(t) = P(t) Q$$.

Note that we've got the simplest separable ordinary differential equation with a known solution in a form of $$P(t) = C \exp(tQ)$$. Given that $$P(0) = I$$, we derive 

$$P(t) = \exp(tQ)$$
