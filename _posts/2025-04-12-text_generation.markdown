---
layout: post
long_title: "Text Generation"
title: "Text Generation"
date: 2025-04-12 16:09:34 +0100
categories: definitions
tag: ""
show_link: false
---

<script type="text/javascript" async
 src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

**Text generation** requires a _Language Model_ to produce a grammatically correct coherent text. Text generation might be **unconditionan** (unrestricted) and **conditional** (the text must meet a certain condition). Both generation types have their limitations and benefits.

## Unconditional generation

Unconditional text generation isn't very useful on its own for most real-world tasks. That's because generated text usually needs to follow certain rules—like keeping the meaning when translating into another language or giving a question-related answer when asked a question.

Nevertheless, unconditional generation does not require a labeled dataset. Thus, the model can be trained using any text data sourced from the internet. This feature essentially eliminates restrictions on the amount of training data, allowing for the creation of powerful Large Language Models (LLMs).

Even though LLMs trained this way might not be useful right away, they can be fine-tuned for specific tasks using smaller, labeled datasets. They can also do surprisingly well at new tasks without any training—or with just a few examples—in zero-shot or few-shot learning paradigm [1]. That is why unconditional generation is the base for all modern language models.

## Conditional generation

Conditional generation is more challenging to implement, as the model must process an additional input—the condition—in order to follow it correctly. Modern transformer-based architectures [2] handle this in different ways: Encoder-Decoder models use an additional encoder to process the condition and pass it to the decoder via cross-attention, while Decoder-only models typically concatenate the conditional text with the target sequence. Note that the latter approach isn't applicable to multimodal text generation—for example, generating image captions.

## Model types

In the current state of the field, the dominating text generation model is **autoregressive** Transformer Decoder-only **LLM**. However, other approaches also exist.
* **LSTM** is an outdated approach that is being tried to find a new application [3].
* **State Space Models (SSM)** are trying to speed up the transformer by abandoning the quadratic time mechanism of attention [4].
* **Diffusion models** are the current SOTA in image generation that is being adapted for text generation [5, 6]. 

## Datasets and Benchmarks

### Unconditional generation:
* **WikiText**: a collection of over 100 million tokens (~0.5GB) extracted from the set of verified Good and Featured articles on Wikipedia.
* **OpenWebText**: Unofficial open-source recreation of OpenAI’s WebText (~40GB).
* **The Pile**: a massive, diverse dataset (~800GB) including books, web pages, GitHub, and academic papers.
* **BooksCorpus**: collection of books of various genres scraped from the indie ebook distribution website Smashwords. Used for pretraining BERT and GPT (~5GB).
* **Common Crawl**: a massive crawl of the web (~9.5PB); used to train GPT, LLaMA, etc. Needs a lot of cleaning.
* **C4**: a **c**olossal, **c**leaned version of **C**ommon **C**rawl dataset developed by Google and Meta (~750GB). C4 was created by taking a single month's scrape of Common Crawl and removing duplicate, placeholder, nonsensical and non-English language content. It was used for training T5, LaMDA, LLaMA and other models.
* **Project Gutenberg**: a set of public domain books (~15GB). Good for literary language modeling.

### Conditional generation:

Condition generation has various practical apptications: machine translation, summarization, detoxification, paraphrasing, text simplification, question answering and so on. Each of such tasks has several dedicated datasets.
* **Machine translation**: [WMT](https://huggingface.co/wmt) (Various Years), [IWSLT](https://huggingface.co/datasets/IWSLT/iwslt2017)
* **Summarization**: [CNN/Daily Mail](https://huggingface.co/datasets/abisee/cnn_dailymail), [XSum](https://huggingface.co/datasets/EdinburghNLP/xsum)
* **Detoxification**: [Paradetox](https://github.com/s-nlp/paradetox/blob/main/paradetox/paradetox.tsv)
* **Paraphrasing**: [Quora Question Pairs](https://www.kaggle.com/datasets/quora/question-pairs-dataset), [PAWS](https://github.com/google-research-datasets/paws?tab=readme-ov-file)
* **Text simplification**: [ASSET](https://huggingface.co/datasets/facebook/asset), [Wiki-Auto](https://github.com/chaojiang06/wiki-auto), [WikiSplit](https://www.kaggle.com/datasets/thedevastator/unveiling-complex-text-relations-through-splitti)
* **Question answering**: [SQuAD](https://huggingface.co/datasets/rajpurkar/squad), [MS MARCO](https://huggingface.co/datasets/microsoft/ms_marco)

As modern models become more powerful, these datasets are no longer complex enough to compare models with each other. Moreover, for a more to add more context to model performance, it became necessary to measure the quality of models on a wide range of tasks at once. That is how specialized **benchmarks** were developed.

#### General Language Understanding
* **[GLUE](https://huggingface.co/datasets/nyu-mll/glue) (General Language Understanding Evaluation)** – text classification benchmark.
* **[SuperGLUE](https://huggingface.co/datasets/aps/super_glue)** – harder version of GLUE for advanced models, evaluates coreference and reasoning.
* **[MMLU](https://huggingface.co/datasets/cais/mmlu) (Massive Multitask Language Understanding)** – evaluates ability to answer questions about math, law, medicine and so on.
* **[HellaSwag](https://huggingface.co/datasets/Rowan/hellaswag)** – evaluates the commonsense knowledge by testing the ability to predict most plausible sentence ending.
* **[GPQA](https://huggingface.co/datasets/Idavidrein/gpqa)** – a multiple-choice, Q&A dataset of very hard questions written and validated by experts in biology, physics, and chemistry.

#### Factuality and Truthfulness
* **[TruthfulQA](https://huggingface.co/datasets/domenicrosati/TruthfulQA)** – questions that test truthfulness and common misconceptions.
* **[FEVER](https://huggingface.co/datasets/fever/fever)** – fact-checking based on Wikipedia evidence.

#### Multilingual Q&A
* **[MMMLU](https://huggingface.co/datasets/openai/MMMLU)** (Multilingual Massive Multitask Language Understanding) – evaluates ability to answer questions in multiple languages.

#### Retrieval-Augmented Generation
* **[TriviaQA](https://nlp.cs.washington.edu/triviaqa/)** – general knowledge questions.
* **[Natural Questions](https://github.com/google-research-datasets/natural-questions)** – open-ended questions from Google search.

#### Coding
* **[SWE-bench Verified
](https://openai.com/index/introducing-swe-bench-verified/)** – evaluates ability to solve GitHub software issues.
* **[Terminal-Bench](https://github.com/laude-institute/terminal-bench)** – tests AI agents in real terminal environments.
* **[HumanEval](https://huggingface.co/datasets/openai/openai_humaneval)** – measures functional correctness for synthesizing programs from docstrings.

## References

[1] Jason Wei et al. Finetuned Language Models are Zero-Shot Learners. ICLR 2022. https://openreview.net/forum?id=gEZrGCozdqR.   
[2] Ashish Vaswani et al. Attention is all you need. NeurIPS 2017. https://papers.nips.cc/paper_files/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html.   
[3] Maximilian Beck et al. xLSTM: Extended Long Short-Term Memory. NeurIPS 2024, https://openreview.net/forum?id=ARAxPPIAhq.   
[4] Albert Gu et al. Efficiently Modeling Long Sequences with Structured State Spaces. ICLR 2022. https://openreview.net/forum?id=uYLFoz1vlAC.   
[5] Jacob Austin et al. Structured Denoising Diffusion Models in Discrete
State-Spaces, NeurIPS 2021. https://papers.neurips.cc/paper/2021/hash/958c530554f78bcd8e97125b70e6973d-Abstract.html.   
[6] Xiang Lisa Li et al. Diffusion-LM Improves Controllable Text Generation. NeurIPS 2022. https://openreview.net/forum?id=3s9IrEsjLyk.

