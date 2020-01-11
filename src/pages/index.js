import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectCard from "../components/ProjectCard";
import PostCard from "../components/PostCard";
import SubscribeForm from "../components/SubscribeForm";
import { ArrowRight } from "react-feather";

export const query = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        twitter
        github
        linkedin
        description
      }
    }
    projects: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: { frontmatter: { collection: { eq: "projects" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          excerpt
          type
          color
          logo {
            publicURL
          }
        }
        fields {
          slug
        }
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { collection: { eq: "posts" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          date
          excerpt
          featuredImage {
            publicURL
          }
        }
        fields {
          slug
        }
        html
      }
    }
  }
`;

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <section className="text-left mb-24">
        <h1 className="text-5xl font-bold inline-block my-8 lg:w-2/3">
          Hi, I'm Jayden Windle.
        </h1>

        <p className="text-xl lg:w-2/3 mb-8">
          {data.site.siteMetadata.description}
        </p>

        <Link to="/contact">
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded flex flex-row">
            Let's work together
            <ArrowRight className="ml-4" />
          </button>
        </Link>
        {/* <div>
          <a
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 mb-1 hover:bg-gray-300 transition font-bold no-underline mr-4"
            href={data.site.siteMetadata.twitter}
          >
            Twitter
          </a>
          <a
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 mb-1 hover:bg-gray-300 transition font-bold no-underline mr-4"
            href={data.site.siteMetadata.github}
          >
            Github
          </a>
          <a
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 mb-1 hover:bg-gray-300 transition font-bold no-underline mr-4"
            href={data.site.siteMetadata.linkedin}
          >
            Linkedin
          </a>
        </div> */}
      </section>

      {/* <section className="mb-24">
        <h3 className="text-3xl font-bold inline-block flex-grow">
          Companies I've worked with
        </h3>
        <svg id="svg" viewBox="0, 0, 400,87.99999999999999">
          <g id="svgg">
            <path
              id="path0"
              d="M164.833 0.675 C 156.682 1.598,152.097 3.886,150.208 7.970 C 149.185 10.181,149.086 60.095,150.099 62.719 C 152.325 68.488,162.611 71.481,176.438 70.383 C 184.075 69.777,188.098 68.516,190.973 65.826 C 194.003 62.992,193.833 64.800,193.833 35.333 L 193.833 9.500 192.899 7.597 C 190.185 2.071,178.324 -0.854,164.833 0.675 M259.351 0.707 C 254.024 1.325,250.200 2.773,248.051 4.988 C 246.030 7.069,245.833 7.959,245.833 15.000 C 245.833 23.661,245.073 22.537,259.295 34.904 C 274.070 47.752,273.335 46.700,273.331 54.977 C 273.328 63.359,271.324 65.562,264.363 64.837 C 258.800 64.258,258.003 63.141,258.001 55.917 L 258.000 50.667 251.500 50.667 L 245.000 50.667 245.000 56.019 C 245.000 62.242,245.306 63.793,246.906 65.662 C 252.402 72.082,276.397 72.383,283.344 66.120 C 285.821 63.887,285.984 63.198,285.993 54.976 C 286.004 44.183,286.717 45.309,271.786 32.543 C 257.850 20.628,258.543 21.636,258.723 13.555 L 258.833 8.610 259.883 7.673 C 262.399 5.427,269.404 5.455,271.669 7.720 L 272.667 8.718 272.667 13.859 L 272.667 19.000 279.167 19.000 L 285.667 19.000 285.659 13.583 C 285.650 6.489,284.925 4.822,280.979 2.823 C 276.833 0.722,267.285 -0.212,259.351 0.707 M352.018 0.707 C 346.710 1.322,342.832 2.808,340.640 5.068 C 338.703 7.063,338.500 8.007,338.500 15.000 C 338.500 23.774,337.522 22.365,352.943 35.808 C 366.719 47.817,365.979 46.715,365.992 55.228 C 366.005 63.349,364.783 64.842,358.167 64.796 C 351.726 64.752,350.670 63.501,350.668 55.917 L 350.667 50.667 344.140 50.667 L 337.614 50.667 337.724 56.750 C 337.846 63.421,338.094 64.383,340.219 66.398 C 346.283 72.145,369.522 71.980,375.982 66.143 C 378.569 63.806,378.668 63.388,378.659 54.763 C 378.649 44.056,379.671 45.653,364.423 32.519 C 350.756 20.746,351.538 21.818,351.402 14.667 C 351.259 7.151,352.055 6.199,358.500 6.184 C 364.683 6.170,365.447 7.017,365.619 14.068 L 365.739 19.000 372.036 19.000 L 378.333 19.000 378.326 13.583 C 378.316 6.406,377.641 4.854,373.643 2.823 C 369.508 0.723,359.954 -0.212,352.018 0.707 M12.724 1.150 C 3.221 2.946,1.329 5.246,1.341 14.982 C 1.351 23.954,0.466 22.640,14.972 35.228 C 29.711 48.018,28.759 46.585,28.605 55.749 L 28.500 61.958 27.509 62.991 C 25.409 65.182,19.157 65.717,15.986 63.978 C 13.649 62.696,13.334 61.741,13.334 55.917 L 13.333 51.000 7.000 51.000 L 0.667 51.000 0.674 56.917 C 0.682 63.748,0.944 64.710,3.345 66.766 C 8.959 71.571,28.612 72.137,36.785 67.729 C 41.057 65.424,41.778 63.376,41.614 54.000 C 41.444 44.296,42.225 45.449,27.000 32.420 C 13.141 20.561,14.333 22.260,14.333 14.370 C 14.333 6.971,15.201 6.077,22.072 6.397 C 27.711 6.660,28.333 7.480,28.333 14.656 L 28.333 19.333 34.833 19.333 L 41.333 19.333 41.333 14.683 C 41.333 5.874,39.784 3.502,32.805 1.624 C 29.378 0.703,16.678 0.403,12.724 1.150 M43.343 1.417 C 43.356 1.943,60.156 54.600,60.384 54.828 C 60.477 54.921,61.989 50.490,63.746 44.982 L 66.939 34.967 61.553 17.987 L 56.167 1.006 49.750 1.003 C 44.832 1.001,43.336 1.097,43.343 1.417 M80.000 1.168 C 80.000 1.260,73.850 20.601,66.333 44.146 C 58.817 67.692,52.667 87.117,52.667 87.312 C 52.667 87.551,54.765 87.665,59.083 87.661 L 65.500 87.656 79.167 44.802 C 86.683 21.232,92.882 1.735,92.941 1.474 C 93.031 1.077,91.994 1.000,86.524 1.000 C 82.936 1.000,80.000 1.076,80.000 1.168 M96.667 35.471 L 96.667 70.000 103.000 70.000 L 109.333 70.000 109.333 38.303 L 109.333 6.605 117.250 6.725 C 124.546 6.835,125.292 6.902,126.761 7.575 C 129.499 8.830,129.333 6.718,129.333 40.323 L 129.333 70.000 135.673 70.000 L 142.013 70.000 141.923 38.890 L 141.833 7.781 140.820 6.140 C 138.165 1.839,135.143 1.276,113.750 1.091 L 96.667 0.943 96.667 35.471 M200.667 35.471 L 200.667 70.000 207.000 70.000 L 213.333 70.000 213.333 54.540 L 213.333 39.079 221.917 38.900 C 240.959 38.501,241.658 37.831,241.663 19.982 L 241.667 8.464 240.800 6.725 C 238.435 1.980,235.343 1.289,215.583 1.091 L 200.667 0.942 200.667 35.471 M287.855 1.750 C 288.585 4.101,303.469 50.855,304.047 52.613 C 304.948 55.357,304.769 55.698,308.321 44.466 L 311.389 34.766 306.677 19.966 C 304.085 11.826,301.660 4.229,301.288 3.083 L 300.612 1.000 294.117 1.000 L 287.622 1.000 287.855 1.750 M310.733 44.083 C 303.176 67.779,296.995 87.279,296.997 87.417 C 296.998 87.554,299.891 87.667,303.424 87.667 L 309.848 87.667 323.458 44.990 C 330.943 21.518,337.145 2.018,337.239 1.657 C 337.406 1.020,337.215 1.000,330.942 1.000 L 324.473 1.000 310.733 44.083 M389.238 1.791 C 384.129 3.217,381.745 9.380,384.548 13.914 C 387.812 19.194,396.210 18.869,398.979 13.356 C 402.213 6.918,396.247 -0.164,389.238 1.791 M394.783 4.108 C 398.150 5.993,398.879 10.883,396.241 13.887 C 392.427 18.232,385.312 15.463,385.341 9.645 C 385.366 4.604,390.397 1.653,394.783 4.108 M388.333 9.667 L 388.333 14.333 389.167 14.333 C 389.963 14.333,390.000 14.244,390.000 12.333 C 390.000 9.564,390.817 9.564,392.527 12.333 C 393.570 14.023,393.909 14.333,394.714 14.333 C 395.907 14.333,395.907 14.331,394.504 12.248 C 393.454 10.688,393.398 10.493,393.921 10.219 C 394.935 9.690,395.333 8.911,395.333 7.455 C 395.333 5.432,394.588 5.000,391.092 5.000 L 388.333 5.000 388.333 9.667 M177.148 6.724 C 178.819 7.267,180.505 8.943,180.784 10.337 C 181.393 13.382,180.998 60.139,180.351 61.564 C 178.225 66.246,164.768 66.071,162.873 61.336 C 162.393 60.135,162.333 57.285,162.333 35.397 L 162.333 10.808 163.083 9.340 C 164.603 6.366,171.882 5.012,177.148 6.724 M393.022 6.678 C 394.597 7.521,393.295 9.000,390.978 9.000 C 390.059 9.000,390.000 8.919,390.000 7.667 C 390.000 6.229,391.354 5.786,393.022 6.678 M226.428 7.586 C 228.936 8.718,229.000 9.026,229.000 20.000 C 229.000 33.290,229.177 33.054,219.083 33.274 L 213.333 33.399 213.333 19.995 L 213.333 6.591 219.083 6.729 C 224.076 6.848,225.043 6.961,226.428 7.586 "
              stroke="none"
              fill="#55327e"
              fill-rule="evenodd"
            ></path>
          </g>
        </svg>
      </section> */}

      <section className="mb-24">
        <div className="flex flex-row flex-between mb-8">
          <h3 className="text-3xl font-bold inline-block flex-grow">Writing</h3>
          {/* <Link to="/writing">
            <button className="bg-white hover:bg-gray-100 transition text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded">
              See all
            </button>
          </Link> */}
        </div>
        <div>
          {data.posts.nodes.map(post => (
            <PostCard post={post} key={post.id} />
          ))}
        </div>
      </section>

      <section className="mb-24">
        <div className="flex flex-row flex-between mb-8">
          <h3 className="text-3xl font-bold inline-block flex-grow">
            Projects
          </h3>
          {/* <Link to="/projects">
            <button className="bg-white hover:bg-gray-100 transition text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded flex flex-row">
              See all
            </button>
          </Link> */}
        </div>
        <div className="flex flex-wrap -mx-2">
          {data.projects.nodes.map((project, index) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </section>

      <SubscribeForm />
    </Layout>
  );
}

export default IndexPage;
