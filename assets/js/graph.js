const data = {
  name: "Language modelling",
  url: "/definitions/2025/03/08/language_modeling.html",
  r: 30,
  color: "#E0A500",
  children: [
    {
      name: "Text generation",
      url: "/definitions/2025/04/12/text_generation.html",
      r: 22,
      color: "#E0A500",
      children: [
        {
          name: "Continuous Diffusion Models",
          url: "/definitions/2025/03/12/continuous_diffusion_models.html",
          r: 19,
          color: "#E0A500",
          children: [
            {
              name: "Diffusion-LM",
              url: "/text_diffusion/2025/04/02/diffusion_lm.html",
              r: 15,
              color: "#76AB21"
            },
            {
              name: "CDCD",
              url: "/text_diffusion/2025/03/16/cdcd.html",
              r: 15,
              color: "#76AB21"
            }
          ]
        },
        {
          name: "Masked Diffusion Models",
          url: "/definitions/2026/02/02/masked_diffusion_models.html",
          r: 19,
          color: "#E0A500",
          children: [
            {
              name: "Sampling Strategies",
              url: "/definitions/2026/02/02/sampling_strategies.html",
              r: 19,
              color: "#E0A500"
            },
            {
              name: "AO-ARM",
              url: "/definitions/2026/02/02/any_order_model.html",
              r: 19,
              color: "#E0A500"
            }
          ]
        }
      ]
    },
    {
      name: "Text retrieval",
      url: "/definitions/2025/04/12/text_retrieval.html",
      r: 22,
      color: "#E0A500",
      children: [
        {
          name: "TSDAE",
          url: "/text_autoencoder/2025/04/12/tsdae.html",
          r: 15,
          color: "#76AB21"
        }
      ]
    }
  ]
};

const width = 928;
const height = 600;

const root = d3.hierarchy(data);
const links = root.links();
const nodes = root.descendants();

const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(d => d.source.data.r * 5).strength(1))
    .force("charge", d3.forceManyBody().strength(-1000))
    .force("x", d3.forceX())
    .force("y", d3.forceY());

const svg = d3.select("#graph")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [-width / 2, -height / 2, width, height])
    .style("max-width", "100%")
    .style("height", "auto");

const link = svg.append("g")
  .selectAll("line")
  .data(links)
  .enter().append("line")
  .attr("stroke", "#999");


const node = svg.append("g")
    .attr("stroke-width", 3)
    .selectAll("circle")
    .data(nodes)
    .join("circle")
    .attr("r", d => d.data.r)
    .attr("fill", d => d.data.color)
    .style("cursor", "pointer")
    .on("mouseover", function (event, d) {
    d3.select(this)
      .transition()
      .duration(200)
      .attr("r", d => d.data.r * 1.2) // slightly larger
      .attr("fill", d => d.data.color); // change color
    })
    .on("mouseout", function (event, d) {
    d3.select(this)
      .transition()
      .duration(200)
      .attr("r", d => d.data.r)
      .attr("fill", d => d.data.color);
    })
    .on("click", (event, d) => window.location.href = d.data.url)
    .call(drag(simulation));

node.append("title")
    .text(d => d.data.name);

const label = svg.append("g")
  .selectAll("text")
  .data(nodes)
  .join("text")
  .text(d => d.data.name)
  .attr("font-size", d => d.data.r)
  .attr("dx", d => d.data.r + 2)
  .attr("dy", "0.35em");

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

function drag(simulation) {
  return d3.drag()
    .on("start", (event, d) => {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    })
    .on("drag", (event, d) => {
      d.fx = event.x;
      d.fy = event.y;
    })
    .on("end", (event, d) => {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    });
}
