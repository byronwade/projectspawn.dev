import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <div className="container">
        <h1><strong>Project Spawn</strong> is under development</h1>
        <p>If you would like to contribute to this website or the ProjectSpawn project please contact me at <a href="mailto:bcw1995@gmail.com">Byron Wade &#60;bcw1995@gmail.com	&#62;</a>.</p>
        <p>This project will be opensource and on my <a href="https://github.com/byronwade/ProjectSpawn">github</a></p>
        <h1>How far have I gotten?</h1>
        <p>I am a partial frontend dev but mostly a designer. So currently ive built part of the user interface, however, I have most of the designing done.</p>
        <p>I need a Volonteer Backend Developer and a DevOps Engineer if you know of anyone please email me at <a href="mailto:bcw1995@gmail.com">Byron Wade &#60;bcw1995@gmail.com&#62;</a>.</p>
        <h1>What I invision for the project!</h1>
        <p>I invision this project to be an all encompassing project development/management environment that works across all platforms! I want to build a project that can help developers keep track of their files on their computer, without having to find your countless projects you could use the GUI interface that would work on all platforms that would sense if the project was static, PHP, WordPress etc.. and spin up the proper docker environment for that specific project. You could start, stop, delete, edit, configure your project all through your favorite text editor or threw the ProjectS pawn GUI. You would then be able to take your docker setup and deploy to a staging server then out to your production server all with a few buttons in your GUI. It would be a ambitious one of a kind project.</p>
        <h1>Who am i?</h1>
        <p>My name is Byron Wade, I am a Plumber by trade and a web developer/designer hobbist, ive been designing for about 8 years now. Im not a very good programmer, however though, I understand most aspects of it. I feel as if I am better in the designing feild and musch better at managment. I am currently looking for a volonteer backend developer to help bring this project to live.</p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
