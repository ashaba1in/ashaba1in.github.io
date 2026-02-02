const nodes = [
  { id: "Language modelling", url: "/definitions/2025/03/08/language_modeling.html", r: 20, color: "#E0A500"},
  { id: "Text generation", url: "/definitions/2025/04/12/text_generation.html", r: 15, color: "#E0A500"},
  { id: "Text retrieval", url: "/definitions/2025/04/12/text_retrieval.html", r: 15, color: "#E0A500"},
  { id: "Continuous diffusion models", url: "/definitions/2025/03/12/continuous_diffusion_models.html", r: 13, color: "#E0A500"},
  { id: "Masked Diffusion Models", url: "/definitions/2026/02/02/masked_diffusion_models.html", r: 13, color: "#E0A500"},
  { id: "Sampling Strategies", url: "/definitions/2026/02/02/sampling_strategies.html", r: 13, color: "#E0A500"},
  { id: "Any-Order Autoregressive Models", url: "/definitions/2026/02/02/any_order_model.html", r: 13, color: "#E0A500"},
  { id: "TSDAE", url: "/text_autoencoder/2025/04/12/tsdae.html", r: 10, color: "#76AB21"},
  { id: "Diffusion-LM", url: "/text_diffusion/2025/04/02/diffusion_lm.html", r: 10, color: "#76AB21"},
  { id: "CDCD", url: "/text_diffusion/2025/03/16/cdcd.html", r: 10, color: "#76AB21"},
];
// blue #1982C4, red #CC0007

const links = [
  { source: "Language modelling", target: "Text generation" },
  { source: "Language modelling", target: "Text retrieval" },
  { source: "Text generation", target: "Continuous Diffusion Models" },
  { source: "Text generation", target: "Masked Diffusion Models" },
  { source: "Masked Diffusion Models", target: "Sampling Strategies" },
  { source: "Masked Diffusion Models", target: "Any-Order Autoregressive Models" },
  { source: "Text retrieval", target: "TSDAE" },
  { source: "Continuous diffusion models", target: "Diffusion-LM" },
  { source: "Continuous diffusion models", target: "CDCD" },
];

const width = 600, height = 500;

const svg = d3.select("#graph")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const simulation = d3.forceSimulation(nodes)
  .force("link", d3.forceLink(links).id(d => d.id).distance(d => d.source.r * 3))
  .force("charge", d3.forceManyBody())
  .force("center", d3.forceCenter(width / 2, height / 2));

const link = svg.append("g")
  .selectAll("line")
  .data(links)
  .enter().append("line")
  .attr("stroke", "#999");

const node = svg.append("g")
  .selectAll("circle")
  .data(nodes)
  .enter().append("circle")
  .attr("r", d => d.r)
  .attr("fill", d => d.color)
  .style("cursor", "pointer")
  .on("mouseover", function (event, d) {
    d3.select(this)
      .transition()
      .duration(200)
      .attr("r", d => d.r * 1.2) // slightly larger
      .attr("fill", d => d.color); // change color
  })
  .on("mouseout", function (event, d) {
    d3.select(this)
      .transition()
      .duration(200)
      .attr("r", d => d.r)
      .attr("fill", d => d.color);
  })
  .on("click", (event, d) => window.location.href = d.url)
  .call(d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended));

const label = svg.append("g")
  .selectAll("text")
  .data(nodes)
  .enter().append("text")
  .text(d => d.id)
  .attr("font-size", 14)
  .attr("dx", d => d.r + 2)
  .attr("dy", ".35em");

simulation.on("tick", () => {
  link
    .attr("x1", d => d.source.x)
    .attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y);

  node
    .attr("cx", d => d.x)
    .attr("cy", d => d.y);

  label
    .attr("x", d => d.x)
    .attr("y", d => d.y);
});

function dragstarted(event, d) {
  if (!event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(event, d) {
  d.fx = event.x;
  d.fy = event.y;
}

function dragended(event, d) {
  if (!event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}
