import Image from "next/image";
import Link from "next/link";
import styles from "./visual.module.css";
import refine from "./refine.module.css";

const asset = (name: string) => `/images/visual-storytelling/${name}`;

export default function VisualStorytellingCaseStudy() {
  return <main className={`case-study ${styles.page}`}>
    <nav className="nav" aria-label="Main navigation"><Link className="wordmark" href="/">REMI&apos;S CREATIVE DESK</Link><div className="nav-links"><Link href="/#work">WORK</Link><Link href="/#about">ABOUT</Link><Link href="/#playground">PLAYGROUND</Link><Link href="/#contact">CONTACT</Link></div></nav>

    <section className={styles.opening}>
      <Link className={styles.backLink} href="/#work">← BACK TO WORK</Link>
      <div className={styles.openingGrid}>
        <div className={styles.openingCopy}><p className={styles.label}>03 / VISUAL STORYTELLING</p><div className={styles.meta}><span>ROLE<b>E-COMMERCE OPERATIONS</b></span><span>FOCUS<b>VISUAL CONTENT<br />LIFESTYLE STORYTELLING</b></span></div><h1>FROM PRODUCT<br />TO <em>LIFE.</em></h1><p>Turning product features into visual stories people can<br />instantly understand and imagine.</p><p className={styles.chinese}>从商品功能出发，<br />通过人物、场景与使用瞬间，<br />让产品进入真实生活语境。</p></div>
        <figure className={styles.heroImage}><span className={styles.bluePaper} aria-hidden="true" /><Image src={asset("visual-09-summer.png")} alt="Person carrying a personalized bag by the beach" fill priority unoptimized sizes="(max-width: 760px) 88vw, 48vw" /><figcaption>SUMMER / IN USE</figcaption></figure>
      </div>
    </section>

    <section className={styles.idea}>
      <div className={styles.ideaCopy}><p className={styles.label}>02 / THE IDEA</p><h2>DON&apos;T JUST SHOW<br />WHAT IT IS.<br /><em>SHOW WHAT IT<br />FEELS LIKE<br />TO OWN IT.</em></h2><p className={styles.lead}>Product imagery can explain an object.<br />Lifestyle content can help people imagine a relationship with it.</p><p className={styles.chinese}>商品图可以说明“它是什么”，<br />而生活方式内容进一步回答：<br />“它会如何进入我的生活？”</p><p className={styles.sequence}>PRODUCT <span>→</span> PERSON <span>→</span> CONTEXT <span>→</span> CONNECTION</p></div>
      <div className={`${styles.ideaImages} ${refine.ideaImages}`}><figure className={`${styles.emotion} ${refine.emotion}`}><Image src={asset("visual-08-emotion.png")} alt="Child interacting with a personalized pillow" fill unoptimized sizes="(max-width: 760px) 88vw, 42vw" /></figure><figure className={`${styles.bedroom} ${refine.bedroom}`}><Image src={asset("visual-07-bedroom.png")} alt="Personalized pillow in a bedroom setting" fill unoptimized sizes="(max-width: 760px) 68vw, 26vw" /><figcaption>PERSON / CONTEXT</figcaption></figure></div>
    </section>

    <section className={`${styles.context} ${refine.contextSection}`}>
      <div className={styles.contextHeader}><p className={styles.label}>03 / BUILDING CONTEXT</p><h2>THE SAME OBJECT<br />CAN TELL<br />A DIFFERENT STORY<br />IN A DIFFERENT PLACE.</h2><div><p>Context changes how a product is understood —<br />from an everyday accessory to part of a holiday,<br />an outdoor moment or a personal routine.</p><p className={styles.chinese}>场景并不是商品的背景板。<br />不同的人物、环境与使用方式，<br />会改变消费者理解商品的方式。</p></div></div>
      <div className={`${styles.contextWall} ${refine.contextWall}`}>{[["visual-01-outdoor.png","EVERYDAY","outdoor"],["visual-02-lifestyle.png","MOVEMENT","lifestyle"],["visual-03-holiday.png","HOLIDAY","holiday"],["visual-04-garden.png","OUTDOOR","garden"]].map(([src,label,className])=><figure className={styles[className]} key={src}><Image src={asset(src)} alt={`${label.toLowerCase()} lifestyle product context`} fill unoptimized sizes="(max-width: 760px) 88vw, 28vw" /><figcaption>{label}</figcaption></figure>)}</div>
    </section>

    <section className={styles.styling}>
      <div className={styles.stylingImages}><figure><Image src={asset("visual-05-kids.png")} alt="Children using personalized products" fill unoptimized sizes="(max-width: 760px) 88vw, 38vw" /></figure><figure><Image src={asset("visual-06-styling.png")} alt="Styled personalized product scene" fill unoptimized sizes="(max-width: 760px) 74vw, 28vw" /></figure></div>
      <div className={styles.stylingCopy}><p className={styles.label}>04 / STYLING THE STORY</p><h2>DETAILS<br />CREATE<br />CONTEXT.</h2><div className={styles.principles}>{[["COLOR","sets the mood."],["PROPS","suggest use."],["ENVIRONMENT","gives context."],["PERSONALIZATION","makes it feel owned."]].map(([term,text])=><p key={term}><b>{term}</b>{text}</p>)}</div><p>Within e-commerce operations, I used styling, scene selection and visual presentation to make product use and personality easier to understand.</p><aside className={refine.executionNote}><b>MY PART / CONTENT EXECUTION</b><p>Selected visual references, defined scene direction, matched props and environments to product use, and translated the direction into listing-ready visual content.</p><p>在电商运营工作中，我结合商品卖点与使用场景进行视觉参考筛选、场景方向判断与素材呈现，并将视觉方向落实到商品内容中。</p></aside><p className={styles.chinese}>在电商运营工作中，<br />我通过场景选择、道具、色彩与视觉呈现，<br />让消费者更直观地理解产品用途与个性化价值。</p></div>
    </section>

    <section className={styles.system}>
      <div className={styles.systemHeader}><p className={styles.label}>05 / VISUAL SYSTEM</p><h2>DIFFERENT PRODUCTS.<br /><em>ONE VISUAL PRINCIPLE.</em></h2><p>Different products required different scenes,<br />but the visual principle stayed consistent:<br />make the product clear while giving it a believable place in life.</p><p className={styles.chinese}>不同产品需要不同场景，<br />但视觉判断保持一致：<br />让商品足够清晰，也让它自然地存在于生活里。</p></div>
      <div className={styles.systemWall}>{[["visual-10-soft-lifestyle.jpg","soft"],["visual-02-lifestyle.png","life"],["visual-06-styling.png","style"],["visual-08-emotion.png","warm"],["visual-03-holiday.png","holidayAgain"]].map(([src,className])=><figure className={styles[className]} key={src}><Image src={asset(src)} alt="Lifestyle visual storytelling example" fill unoptimized sizes="(max-width: 760px) 88vw, 32vw" /></figure>)}<span>SOFT LIGHT / REAL LIFE / PERSONAL DETAILS</span></div>
    </section>

    <section className={styles.reflection}><div className={styles.reflectionInner}><div><p className={styles.label}>06 / REFLECTION</p><h2>GOOD VISUAL CONTENT<br />DOESN&apos;T JUST MAKE<br />A PRODUCT LOOK BETTER.</h2></div><div><p className={styles.takeaway}>It helps people see<br />a place for it<br />in their lives.</p><p className={styles.chinese}>这段实践让我逐渐形成了一套自己的视觉判断：<br /><br />场景不是商品的背景，<br />而是帮助消费者理解商品、<br />想象使用方式并建立情感连接的一部分。</p></div><p className={styles.sequence}>PRODUCT <span>→</span> CONTEXT <span>→</span> IMAGINATION <span>→</span> CONNECTION</p></div><div className={styles.nextCase} aria-label="Preview of the next case study"><span>NEXT CASE ↗</span><strong>MORE STORIES<br />IN PROGRESS.</strong><small>CASE PREVIEW / NOT LIVE YET</small></div></section>
  </main>;
}
