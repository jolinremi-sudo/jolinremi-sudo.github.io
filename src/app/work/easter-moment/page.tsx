import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import concept from "./concept.module.css";
import commerce from "./commerce.module.css";
import closing from "./closing.module.css";

export default function EasterMomentCaseStudy() {
  return (
    <main className={`case-study ${styles.page}`}>
      <nav className="nav" aria-label="Main navigation">
        <Link className="wordmark" href="/">REMI&apos;S CREATIVE DESK</Link>
        <div className="nav-links">
          <Link href="/#work">WORK</Link>
          <Link href="/#about">ABOUT</Link>
          <Link href="/#playground">PLAYGROUND</Link>
          <Link href="/#contact">CONTACT</Link>
        </div>
      </nav>

      <section className={styles.opening}>
        <Link className={styles.backLink} href="/#work">← BACK TO WORK</Link>
        <div className={styles.coverGrid}>
          <div className={styles.intro}>
            <p className={styles.caseLabel}>02 / SEASONAL CONTENT</p>
            <div className={styles.meta}>
              <span>ROLE<b>E-COMMERCE OPERATIONS</b></span>
              <span>MARKET<b>UK</b></span>
              <span>SEASON<b>EASTER</b></span>
              <span>FOCUS<b>SEASONAL CONTENT<br />VISUAL STORYTELLING</b></span>
            </div>
            <h1>DESIGNING AN<br /><em>EASTER MOMENT.</em></h1>
          </div>

          <div className={styles.imageStage}>
            <span className={styles.yellowField} aria-hidden="true" />
            <span className={styles.blueField} aria-hidden="true" />
            <div className={styles.coverImage}>
              <Image
                src="/images/easter-moment/easter-01-cover.webp"
                alt="Girl with a personalized Easter basket in a spring setting"
                fill
                priority
                sizes="(max-width: 760px) 88vw, 48vw"
              />
            </div>
            <span className={styles.imageTag}>SPRING / FAMILY / RITUAL</span>
            <span className={styles.momentNote}>PRODUCT → MOMENT</span>
          </div>

          <div className={styles.copy}>
            <p className={styles.lead}>Turning a seasonal product into<br />a small <em>family ritual.</em></p>
            <p className={styles.chinese}>从复活节产品出发，<br />把节日需求转化为更有场景感与情绪价值的内容表达。</p>
          </div>
        </div>
        <span className={styles.issue}>EASTER 2026</span>
      </section>

      <section className={styles.insight}>
        <div className={styles.insightHeading}>
          <p className={styles.caseLabel}>02 / THE INSIGHT</p>
          <h2>THEY WEREN&apos;T<br />JUST BUYING<br />A BASKET.</h2>
          <p className={styles.insightStatement}>They were preparing<br />a <em>moment.</em></p>
          <div className={styles.insightPoints}>
            <article><span>01 / RITUAL</span><h3>Egg hunts, gifting<br />and family traditions.</h3><p>节日购买不只是功能需求，<br />也在为家庭仪式做准备。</p></article>
            <article><span>02 / PERSONALIZATION</span><h3>A named basket feels<br />made for one child.</h3><p>姓名定制让普通节日用品<br />变成更有专属感的物件。</p></article>
            <article><span>03 / MEMORY</span><h3>Seasonal objects can become<br />part of childhood memories.</h3><p>产品的价值也来自<br />它参与了孩子的节日记忆。</p></article>
          </div>
        </div>

        <div className={styles.lifestyleStage}>
          <span className={styles.sageField} aria-hidden="true" />
          <div className={styles.lifestyleImage}>
            <Image src="/images/easter-moment/easter-04-lifestyle.webp" alt="Child using a personalized Easter basket outdoors" fill sizes="(max-width: 760px) 88vw, 48vw" />
          </div>
          <span className={styles.eggHunt}>EGG HUNT ↗</span>
        </div>
      </section>

      <section className={concept.section}>
        <div className={concept.header}>
          <div>
            <p className={concept.label}>03 / THE CONCEPT</p>
            <h2>FROM PRODUCT<br />TO A SEASONAL<br />WORLD.</h2>
          </div>
          <div className={concept.introduction}>
            <p>Instead of showing the basket in isolation,<br />I built the content around the world it belonged in —<br />spring color, Easter rituals and family moments.</p>
            <p>不只展示产品本身，<br />而是围绕春日色彩、复活节场景与家庭时刻，<br />让产品进入一个完整的节日视觉世界。</p>
          </div>
        </div>

        <div className={concept.board}>
          <div className={concept.directionNotes}>
            {[["01", "SPRING PALETTE"], ["02", "EASTER SETTING"], ["03", "PERSONALIZATION"], ["04", "FAMILY MOMENT"]].map(([number, note]) => <p key={number}><span>{number}</span>{note}</p>)}
          </div>

          <figure className={concept.campaignImage}>
            <Image src="/images/easter-moment/easter-03-campaign.webp" alt="Easter campaign visual direction" fill sizes="(max-width: 760px) 88vw, 46vw" />
          </figure>
          <figure className={concept.visualImage}>
            <Image src="/images/easter-moment/easter-05-visual.webp" alt="Spring visual direction variation" fill sizes="(max-width: 760px) 72vw, 22vw" />
          </figure>
          <figure className={concept.indoorImage}>
            <Image src="/images/easter-moment/easter-06-indoor.webp" alt="Indoor seasonal visual variation" fill sizes="(max-width: 760px) 72vw, 25vw" />
          </figure>
          <span className={concept.annotation}>SEASONAL WORLD ↗</span>
        </div>
      </section>

      <section className={commerce.section}>
        <div className={commerce.header}>
          <div>
            <p className={commerce.label}>04 / FROM DESIRE TO DECISION</p>
            <h2>MAKE THE<br />FEELING<br />SHOPPABLE.</h2>
          </div>
          <div className={commerce.copy}>
            <p className={commerce.statement}>First, make people want the moment.<br />Then, make it easy to choose.</p>
            <p className={commerce.scope}>Within e-commerce operations, I translated that insight into seasonal content direction, listing presentation and merchandising decisions.</p>
            <p className={commerce.execution}>In execution, I selected and organized seasonal visual assets, structured the listing presentation, and clarified personalization choices for shoppers.</p>
            <p>节日氛围负责建立向往，<br />清晰的商品与定制信息则帮助消费者完成选择。</p>
            <p>内容不只需要“好看”，<br />也需要降低从喜欢到下单之间的理解成本。</p>
          </div>
        </div>

        <div className={commerce.flow} aria-label="Desire, clarity, choice progression">
          <article>
            <h3>DESIRE</h3>
            <p>Seasonal scenes<br />Emotional context</p>
          </article>
          <span aria-hidden="true">→</span>
          <article>
            <h3>CLARITY</h3>
            <p>Product presentation<br />What is included</p>
          </article>
          <span aria-hidden="true">→</span>
          <article>
            <h3>CHOICE</h3>
            <p>Color<br />Personalization<br />Combination</p>
          </article>
        </div>

        <div className={commerce.examples}>
          <figure className={commerce.productExample}>
            <Image src="/images/easter-moment/easter-07-product.webp" alt="Seasonal assortment product presentation" fill sizes="(max-width: 760px) 88vw, 46vw" />
            <figcaption>PRODUCT / CLARITY</figcaption>
          </figure>
          <figure className={commerce.optionsExample}>
            <Image src="/images/easter-moment/easter-08-options.webp" alt="Customization options within the seasonal assortment" fill sizes="(max-width: 760px) 88vw, 28vw" />
            <figcaption>CUSTOMIZATION / CHOICE</figcaption>
          </figure>
          <p className={commerce.assortment}>ACROSS THE SEASONAL ASSORTMENT</p>
        </div>
      </section>

      <section className={closing.section}>
        <div className={closing.recognition}>
          <div className={closing.recognitionInner}>
            <div className={closing.recognitionCopy}>
              <p className={closing.label}>05 / RECOGNITION &amp; REFLECTION</p>
              <h2>A SEASONAL<br />MOMENT,<br />MADE<br />RECOGNIZABLE.</h2>
              <p>One Easter product listing featuring this visual<br />was selected as an Etsy&apos;s Pick.</p>
              <p>其中一个使用这组视觉的复活节商品 Listing<br />获得了 Etsy&apos;s Pick。</p>
            </div>
            <figure className={closing.pickImage}>
              <Image src="/images/easter-moment/easter-02-etsy-pick.webp" alt="Easter product visual selected as an Etsy's Pick" fill priority sizes="(max-width: 760px) 88vw, 47vw" />
              <figcaption>SELECTED BY ETSY ↗</figcaption>
            </figure>
          </div>
        </div>

        <div className={closing.reflection}>
          <div className={closing.reflectionInner}>
            <p className={closing.reflectionLabel}>REFLECTION / 2026</p>
            <h2><span>GOOD SEASONAL<br className={closing.mobileBreak} /> CONTENT</span><br className={closing.desktopBreak} /><span>DOESN&apos;T STOP</span><br className={closing.desktopBreak} /><span>AT DECORATION.</span></h2>
            <p className={closing.takeaway}>It gives people a reason<br />to imagine it in their lives.</p>
            <div className={closing.chineseReflection}>
              <p>这次节日内容实践让我更明确：<br />好的季节性内容不应只停留在视觉装饰，</p>
              <p>而是从消费者的节日情绪与生活场景出发，<br />让产品自然进入他们想象中的那个时刻。</p>
            </div>
            <p className={closing.flow}>RITUAL <span>→</span> WORLD <span>→</span> DESIRE <span>→</span> CHOICE</p>
          </div>

          <Link className={closing.nextCase} href="/work/visual-storytelling" aria-label="Open the Visual Storytelling case study">
            <span>NEXT CASE ↗</span>
            <strong>VISUAL STORYTELLING</strong>
            <small>PERSONALIZED PRODUCTS / LIFESTYLE CONTENT</small>
            <em>CASE PREVIEW</em>
          </Link>
        </div>
      </section>
    </main>
  );
}
