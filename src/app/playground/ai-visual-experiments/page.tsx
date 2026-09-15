/* eslint-disable @next/next/no-html-link-for-pages */
import styles from "./ai-visual.module.css";

const studies = [
  {
    id: "01 / OUTDOOR CONTEXT",
    title: <>FROM OBJECT<br />TO <em>OCCASION.</em></>,
    copy: <>A simple personalized bag becomes easier to imagine<br />when placed inside an outdoor, everyday moment.</>,
    chinese: <>从单一产品展示，<br />延展到更具体的户外生活场景，<br />让产品的使用方式变得更直观。</>,
    before: "/images/ai-visual-lab/ai-01-maya-before.jpg",
    after: "/images/ai-visual-lab/ai-01-maya-after.png",
    altBefore: "Source image of a personalized Maya bag",
    altAfter: "AI-assisted outdoor lifestyle scene featuring a personalized Maya bag",
    className: styles.outdoor,
  },
  {
    id: "02 / HOME & LIFESTYLE",
    title: <>FROM PRODUCT<br />TO A PLACE <em>IN THE HOME.</em></>,
    copy: <>Instead of showing the product alone,<br />the scene explores how color, scale and styling<br />can help it feel part of a lived-in interior.</>,
    chinese: <>不只展示产品本身，<br />而是通过空间、色彩与人物关系，<br />让消费者更容易想象它在真实生活中的位置。</>,
    before: "/images/ai-visual-lab/ai-02-grace-before.png",
    after: "/images/ai-visual-lab/ai-02-grace-after.png",
    altBefore: "Source image of a personalized Grace product",
    altAfter: "AI-assisted home lifestyle scene featuring a personalized Grace product",
    className: styles.home,
  },
  {
    id: "03 / PRODUCT IN USE",
    title: <>FROM FEATURE<br />TO <em>USE.</em></>,
    copy: <>The lifestyle scene shifts attention<br />from what the product looks like<br />to how it might actually be used.</>,
    chinese: <>从“产品长什么样”，<br />进一步延展到“它会怎样进入日常生活”。</>,
    before: "/images/ai-visual-lab/ai-03-sephia-before.jpg",
    after: "/images/ai-visual-lab/ai-03-sephia-after.webp",
    altBefore: "Source image of a personalized Sephia product",
    altAfter: "AI-assisted in-use lifestyle scene featuring a personalized Sephia product",
    className: styles.inUse,
  },
];

export default function AiVisualExperiments() {
  return <main className={styles.page}>
    <nav className="nav" aria-label="Main navigation"><a className="wordmark" href="/">REMI&apos;S CREATIVE DESK</a><div className="nav-links"><a href="/#work">WORK</a><a href="/#about">ABOUT</a><a href="/#playground">PLAYGROUND</a><a href="/#contact">CONTACT</a></div></nav>
    <section className={`${styles.hero} paper-grid`}><a className={styles.back} href="/#playground">← BACK TO PLAYGROUND</a><div className={styles.heroMeta}><span>PLAYGROUND / 01</span><span>AI × VISUAL EXPLORATION</span><span>2026</span></div><h1>FROM PRODUCT IMAGE<br />TO <em>IMAGINED LIFE.</em></h1><div className={styles.heroCopy}><p>Exploring how AI can extend product imagery<br />into lifestyle scenes, moods and consumer contexts.</p><p>从已有产品素材出发，<br />尝试用 AI 延展产品的使用场景、生活氛围与内容表达。</p></div><aside className={styles.workflowNote}>AI-ASSISTED<br /><b>VISUAL WORKFLOW ↗</b></aside></section>
    <section className={styles.workflow}><p className={styles.label}>02 / THE WORKFLOW</p><div className={styles.workflowIntro}><h2>THE PRODUCT STAYS.<br />THE <em>WORLD</em> CHANGES.</h2><div><p>The starting point is an existing product image.<br />I use AI-assisted workflows to explore how the same product could appear<br />in a more relevant lifestyle context.</p><p className={styles.cn}>保留产品本身的识别信息，<br />通过 AI 辅助的视觉工作流，<br />探索更贴近消费者生活方式的场景表达。</p></div></div><div className={styles.process} aria-label="AI-assisted visual workflow"><span>SOURCE IMAGE</span><b>→</b><span>SCENE DIRECTION</span><b>→</b><span>AI GENERATION</span><b>→</b><span>SELECT &amp; REFINE</span><b>→</b><span>CONTENT ASSET</span></div></section>
    <section className={styles.studies}><div className={styles.studiesHeading}><p className={styles.label}>03 / THREE VISUAL STUDIES</p><p>Three products. Three contexts. One question:<br />where could this product belong in real life?</p></div>{studies.map((study) => <article className={`${styles.study} ${study.className}`} key={study.id}><div className={styles.studyWords}><p className={styles.label}>{study.id}</p><h2>{study.title}</h2><p>{study.copy}</p><p className={styles.cn}>{study.chinese}</p></div><div className={styles.pair}><figure><div className={styles.imageFrame}><img src={study.before} alt={study.altBefore} /></div><figcaption>SOURCE</figcaption></figure><span className={styles.pairArrow} aria-hidden="true">→</span><figure><div className={styles.imageFrame}><img src={study.after} alt={study.altAfter} /></div><figcaption>AI-ASSISTED SCENE</figcaption></figure></div></article>)}</section>
    <section className={styles.role}><p className={styles.label}>04 / MY ROLE</p><div className={styles.roleTop}><h2>AI DOESN&apos;T REPLACE<br />THE <em>VISUAL DECISION.</em></h2><div><p>The tool generates possibilities. My role is deciding the consumer context, scene direction, visual mood, product relevance and which outputs are worth using.</p><p className={styles.cn}>AI 提供生成能力，<br />而我更关注的是消费者语境、场景方向、视觉氛围，<br />以及最终哪些画面真正适合作为内容资产。</p></div></div><div className={styles.roleNotes}><article><b>CONTEXT</b><p>What situation should the product belong to?</p></article><article><b>MOOD</b><p>What should the image feel like?</p></article><article><b>PRODUCT CLARITY</b><p>Does the product remain recognizable?</p></article><article><b>SELECTION</b><p>Is the result actually useful for content?</p></article></div></section>
    <section className={styles.reflection}><p className={styles.label}>05 / REFLECTION</p><h2>THE TOOL CAN GENERATE AN IMAGE.<br />THE WORK IS KNOWING<br />WHAT IMAGE IS <em>WORTH MAKING.</em></h2><p className={styles.reflectionAccent}>AI is part of the process,<br />not the point of the work.</p><p className={styles.cn}>这类实践让我逐渐意识到，<br />AI 本身不是内容策略。<br /><br />真正重要的是：<br />为什么需要这张图，<br />它服务什么消费者场景，<br />以及它是否让产品表达变得更清楚。</p><div className={styles.pathway}><span>PRODUCT</span><b>→</b><span>CONTEXT</span><b>→</b><span>DIRECTION</span><b>→</b><span>GENERATION</span><b>→</b><span>SELECTION</span></div><a className={styles.playgroundLink} href="/#playground">← CREATIVE PLAYGROUND</a></section>
  </main>;
}
