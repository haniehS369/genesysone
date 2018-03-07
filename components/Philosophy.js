
const Philosophy = (props) => {
  switch (props.language) {
    case 'english': {
      return (<EnglishPhilosophy fundname={props.fundname}/>)
    }
    case 'chinese': {
      return (<ChinesePhilosophy fundname={props.fundname}/>)
    }
    case 'russian': {
      return (<RussianPhilosophy fundname={props.fundname}/>)
    }
    default: {
      return (<EnglishPhilosophy fundname={props.fundname}/>)
    }
  }
}


const EnglishPhilosophy = (props) => {
  return (
    <div className='thesis'>
      <h2>We make investments in cryptoassets</h2>

      <div className="section-container">
        <i>{props.fundname}</i> is a boutique hedge fund that manages a portfolio of cryptoassets. We specialize in providing access to new cryptoassets and hedging strategies that utilize asset-backed tokens to mitigate downside exposures.
      </div>
      <div className="section-container">
        At <span>{(props.fundname)}</span>, our mission is to provide investors with access to this new asset class, safety, security, and exceptional returns. We focus on five classes of cryptoassets that can be broadly classified as infrastructure protocols.
      </div>

      <div className="section-container">
        <h3> We invest in blockchain technologies including: </h3>

        <div className="section-container">
        <b>Cryptocurrencies, with strong value preserving properties. </b>
        <br/>
        We look for deflationary and immutable stores of value. Deflationary, so the real value of assets do not erode over time. Immutable, so no one can seize the asset. We like it more if there are anonymity features to protect owners.
        </div>

        <div className="section-container">
        <b>Smart contract platforms, that prioritize safety and security.</b>
        <br/>
        Smart contract platforms are secure, but not <i>safe</i>. The current generation of smart contracts are written in languages with vulnerabilities that are difficult to find before they are deployed to the public, resulting in large losses. We look for projects with smart contracts that are written with safe languages that can be statically analysed.
        </div>

        <div className="section-container">
        <b>Cross-chain layers, that enable interoperability between blockchains. </b>
          <br/>
          Rapid evolution in blockchain frameworks will lead to substantial overlap in network protocols. We invest in cross-chain protocols with open standards that enable different blockchains to interoperate and work together seamlessly to create value.
        </div>

        <div className="section-container">
        <b> Decentralized applications, with tokens that promote strong network effects.</b>
          <br/>
          We look for decentralized applications (DApps) with tokens that incentivize users to improve the safety, liquidity and quality of a marketplace. When these three attributes improve as a side-effect of a user’s actions, the network becomes more valuable to other users. Tokens that incentivize these behaviours produce network effects with most of the value captured in tokens, rather than equity.
        </div>

        <div className="section-container">
        <b>Asset backed tokens, that hedge systemic cryptoasset market risks </b>
          <br/>
          Tokens that are tied to real-world assets hold value during bear markets and serve as great partial hedges. They also serve as collateral for risk management strategies.
        </div>
      </div>
    </div>
  )
}

const ChinesePhilosophy = (props) => {
  return (
    <div className ='thesis'>
      <h2>我们在密码套件中进行投资</h2>
      <div className="section-container">
      {props.fundname} 管理高增长密码资产组合。我们采取长期的价值投资方式，积极寻求新兴机遇，包括区块链协议和替代硬币。我们寻找密码套件中的早期阶段仓位，随着时间的推移，潜在的规模，速度和耐力将成倍增长。
      </div>
      <div className="section-container">在 <span>{props.fundname}</span>，我们的使命是为投资者提供这个新的资产类别，流动性，专有技术分析和安全性。
      </div>

      <h3>我们投资于加密和区块链技术，包括：</h3>
      <b>加密电子货币，具有很强的保值特性。</b>
        我们寻找通货紧缩和不可改变的价值储备。通货紧缩，所以资产的真实价值不会随着时间的推移而消失。不变的，所以没有人可以夺取资产。

      <div className="section-container"><b>智能合约平台，具有捕捉强大网络效应的令牌。</b>
      <br/>
      网络和市场在交易安全和流通安全的情况下运作良好。当这些特征作为用户行为的副作用而改善时，网络对其他用户变得更有价值。具有令牌的智能合约平台可激励这些行为，从而产生有价值的自我管制市场。这些形成了自主和分散Ubers和Airbnbs的下一波，其中大部分价值被捕获在代币中，而不是公平的。
      </div>

      <div className="section-container">
      <b>交叉链接层，可以实现区块链之间的互操作性。</b>
      <br/>
      我们认为，密码空间的快速演变将导致区块链协议和碎片的重叠。跨链协议的投资直接解决了这个问题，因为这些互操作性层使主要的区块链能够无缝协作。
      </div>
      <br/>
    </div>
  )
}

const RussianPhilosophy = (props) => {
  return (
    <div className='thesis'>
      <h2>Мы делаем инвестиции в криптоанализ</h2>

      <div className="section-container">
      <i>{props.fundname}</i> управляет портфелем высокопроизводительных криптоанализов. Мы берем долгосрочный подход к инвестированию в стоимость и активно стремимся к появлению новых возможностей, включая протоколы блок-цепи и альтернативные монеты. Мы ищем ранние позиции в криптоассетах с возможностью расти экспоненциально - масштаб, скорость и выносливость с течением времени.
      </div>
      <div className="section-container">
      В <span>{props.fundname}</span> наша миссия состоит в том, чтобы предоставить инвесторам доступ к этому новому классу активов, ликвидности, проприетарному техническому анализу и безопасности.
      </div>

      <h3>Мы инвестируем в криптоассеты и технологии blockchain, включая:</h3>

      <div className="section-container">
      <b>Cryptocurrencies с сильными значениями сохраняющих свойства.</b>
      <br/>
      Мы ищем дефляционные и неизменные ценности. Дефляционная, поэтому реальная стоимость активов не снижается с течением времени. Неизменяется, поэтому никто не может захватить этот актив
      </div>

      <div className="section-container">
      <b>Смарт-контрактные платформы с токенами, которые захватывают сильные сетевые эффекты.</b>
      <br/>
      Сети и рынки работают хорошо, когда безопасно торговать, надежно и легко. Когда эти характеристики улучшаются в качестве побочного эффекта действий пользователя, сеть становится более ценной для других пользователей. Смарт-контрактные платформы с токенами, которые стимулируют это поведение, могут создавать ценные, саморегулируемые рынки. Они формируют следующую волну автономных и децентрализованных Ubers и Airbnbs, причем большая часть ценностей захватывается в токенах, а не справедливости.
      </div>

      <div className="section-container">
      <b>Уровни кросс-цепочек, которые обеспечивают возможность взаимодействия между цепочками.</b>
      <br/>
      Мы полагаем, что быстрое развитие криптопространства приведет к перекрытию протоколов и фрагментации блоков. Инвестиции в межсетевые протоколы напрямую решают эту проблему, поскольку эти уровни взаимодействия позволяют основным блочным цепям беспрепятственно работать вместе.
      </div>
      <br/>
    </div>
  )
}

export default Philosophy;

