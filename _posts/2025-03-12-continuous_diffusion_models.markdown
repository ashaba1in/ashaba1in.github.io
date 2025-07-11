---
layout: post
long_title: "Continuous Diffusion Models"
title: "Continuous Diffusion Models"
date: 2025-03-12 16:09:34 +0100
categories: definitions
tag: ""
show_link: false
---

<script type="text/javascript" async
 src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

**Continuous Diffusion Models** for text generation is an attempt to adapt diffusion models (SOTA for image generation) to text data. Unlike **Discrete Diffusion Models**, continuous diffusion models do not change the noising process (although there are exceptions). Instead they map discrete text into a continuous latent space and run a default diffusion process there.

Formally speaking, let $$w = (w_1, \dots, w_n)$$ be an input sequence of tokens of size $$n$$. Then its latent $$x_0 \in \mathbb{R}^{m \times d}$$ can be obtained using encoder model $$E$$, $$x_0 = E(w)$$. Note that after the mapping the length of the sequence might change ($$m \neq n$$). Each noised latent $$x_t$$ for $$t \in [1, T]$$ is sampled from the Gaussian distribution, $$x_t \sim \mathcal{N}(\gamma_t x_0, \sigma_t^2I)$$, where $$\gamma_t$$ and $$\sigma_t$$ are hyperparameters that control the noise injection speed, such that $$\forall s < t, \gamma_s > \gamma_t$$ and $$\sigma_s < \sigma_t$$ and $$\gamma_T = \sigma_1 = 0, \gamma_0 = \sigma_T = 1$$.

During the training a diffusion model $$f_\theta$$ learns to reconstruct an original latent $$x_0$$ based on its noised version $$x_t$$. The generation is performed by starting from the pure noise $$x_T$$ and then iteratively refining it using the trained diffusion model $$f_\theta$$ until $$\hat{x}_0$$ is recovered. At the end of the generation process, decoder $$D$$ converts generated latent $$\hat{x}_0$$ back to tokens, $$\hat{w} = D(\hat{x}_0)$$.

Most commonly encoder $$E$$ simply maps each token into its embedding vector, so $$m = n$$. Decoder $$D$$ then converts generated embedding to a token corresponding to a closes embedding.

At the training phase the main loss term which is optimized is the MSE between the original latent $$x_0$$ and the predicted latent.

$$
L(\theta) = \mathbb{E}_{x_0, t, \varepsilon} \|x_0 - f_{\theta}(\gamma_t x_0 + \sigma_t \varepsilon, t) \|^2,
$$

where $$f_\theta$$ is a diffusion model that is being trained. 

Often embeddings are optimized simultaneously with the diffusion model. Then some additional loss terms must be added in order to prevent the collapse of the embeddings space.

Note that if a diffusion model is trained with cross-entropy loss instead of MSE, embeddings will explode and this problem must also be fixed. For example, by normalizing embeddings before each use as in [CDCD]({% post_url 2025-03-16-cdcd %}) method.
