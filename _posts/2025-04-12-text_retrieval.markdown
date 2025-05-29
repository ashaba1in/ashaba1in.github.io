---
layout: post
long_title: "Text Retrieval"
title: "Text Retrieval"
date: 2025-04-12 16:09:34 +0100
categories: definitions
tag: ""
show_link: false
---

<script type="text/javascript" async
 src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

Text retrieval is a language modelling task, which goal is to find relevant information stored as text, such as documents or articles, in response to a user's query. It involves matching a query (a question, keywords, or text) against a set of text documents and returning the most relevant ones. This process is crucial for various applications like search engines, question answering systems, and document retrieval in legal, medical or any other field.

Dense Retrieval:
Pretrained language models (PLMs) are used to generate dense vectors (embeddings) that capture the semantic meaning of text, enabling more accurate semantic matching. 
Learning-based Ranking:
Models are trained to learn relevance scores and rank documents accordingly.

## Model types

The whole concept of text retrieval in built on idea of representing a text with a real-numbered vector (embedding) of fixed length. Then, text similarity can be measured as a proximity of the corresponding vectors [1].

The first attempts represented texts using bag-of-words or tf-idf sparce vectors [2]. Based on this scheme, the relevance can be estimated according to the lexical similarity between sparse query and text vectors. Such relevance computation resulted in a poor retrieval quality as it doesn't account for text semantics directly.

Since the invention of the Transformer model, BERT-based approaches have largely raised text retrieval quality bar. There are two different types of retrieval models: **dual-encoder** and **cross-encoder**. Dual-encoder retrieval methods compute embeddings for query and all documents separately and then measure the distance between embeddings, while cross-encoder methods compute a single similarity score for each $\langle$query, document$\rangle$ pair (BERT receives two texts separated with [SEP] token). The former approach it preferable when the list of candidate documents is large, because embeddings for all documents can be pre-computed, which increases the indexing speed. The latter method works better when the amount of documents is small, because it measures relevance better due to the lack of need for information compression.

Also, in the recent years, LLMs started being applied for text retrieval. As LLMs are created only for text generation, the retrieval is done by prompting. For example, 
```
Rate the semantic similarity between the following two sentences on a scale from 0 to 5, where 0 means completely different and 5 means identical in meaning.

Sentence 1: A man is riding a bicycle.
Sentence 2: A person is biking on the road.

Answer (0-5):
```

## Benchmarks

There are not that much benchmarks for evaluating retrieval capabilities of language models as there are for testing language understanding. However, each benchmark covers many aspects of retrieval problem.

* **[BEIR](https://github.com/beir-cellar/beir?tab=readme-ov-file)** – 20+ information retrieval datasets (e.g., TREC, SciFact, FEVER)
* **[MS-MARCO](https://microsoft.github.io/msmarco/)** – Microsoft benchmark focused on passage ranking for search relevance.
* **[HotpotQA](https://hotpotqa.github.io/)** – multi-hop question answering with reasoning across documents.
* **[Natural Questions (NQ)](https://ai.google.com/research/NaturalQuestions)** – open-domain QA from Google search	with a query, a long answer and a target short answer.
* **[MTEB](https://github.com/embeddings-benchmark/mteb?tab=readme-ov-file) (Massive Text Embedding Benchmark)** – benchmark with over 50 datasets across 8 NLP task types. Designed primarily for evaluating sentence and document embeddings, like those produced by SBERT, OpenAI embeddings, GTE, or Cohere models.

## References

[1] Wayne Xin Zhao et al. Dense Text Retrieval Based on Pretrained Language Models: A Survey. 2024. https://arxiv.org/abs/2211.14876.   
[2] G. Salton et al. A vector space model for automatic indexing. 1975. https://dl.acm.org/doi/pdf/10.1145/361219.361220.   

