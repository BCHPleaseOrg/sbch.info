<template>
    <main class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
            <h1>
                <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                    Introduction
                </span>

                <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    XHedge for Beginners
                </span>
            </h1>

            <p class="mt-8 text-xl text-gray-500 leading-8">
                XHedge is one of the most important features of SmartBCH.
                It allows its stakeholders to elect <router-link to="/validators" class="text-blue-500 font-bold hover:underline">validators</router-link> through the <a href="https://docs.smartbch.org/smartbch/developers-guide/xhedge-contract" target="_blank" class="text-blue-500 font-bold hover:underline">XHedge Smart Contract</a>.
            </p>
        </div>

        <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <blockquote>
                <p>
                    A hedge is an investment that is made with the intention of reducing the risk of adverse price movements in an asset.
                    Normally, a hedge consists of taking an offsetting or opposite position in a related security.
                </p>
            </blockquote>

            <p>
                The Proof-of-Stake (PoS) scheme of SmartBCH begins with the XHedge smart contract, which extends the function of <a href="https://anyhedge.com/" target="_blank" class="text-blue-500 font-bold hover:underline">AnyHedge</a> (the first Bitcoin Cash futures contract).
                Then it combines XHedge and the concept of coin-days to enable stakeholder voting, while maintaining 100% of the coin's utility.
            </p>

            <h3 class="text-2xl font-bold">TOP3 Benefits of the XHedge contract</h3>

            <ul role="list">
                <li>SmartBCH stakeholders have the ability to vote for their preferred SmartBCH <router-link to="/validators" class="text-blue-500 font-bold hover:underline">validators</router-link> (those that secure the network).</li>
                <li>Hedge/Lever NFT holders DO NOT lose their ability to participate in SmartBCH DeFi opportunities.</li>
                <li>Accrued coin-days are destroyed after voting; aligning with SmartBCH long-term incentives for value and growth.</li>
            </ul>

            <h2>How Does It Work?</h2>

            <p>
                By staking BCH into the XHedge contract, you get a pair of NFTs: the LeverNFT and the HedgeNFT.
            </p>

            <p>
                As time goes by, the coin-days <code>(staking amount X time duration)</code> accumulate.
                eg. if you stake 1 BCH for 30-days, you would have accrued 30 coin-days.
            </p>

            <p>
                You can set a validator's pubkey as the LeverNFT's "supporting validator".
                Anyone can make a LeverNFT to vote for its supporting validator using the accumulated coin-days.
                And the accumulated coin-days will be cleared to zero immediately after voting.
            </p>

            <p>
                You can change the LeverNFT's supporting validator anytime. And when you want to stop staking, you just burn the pair of LeverNFT and HedgeNFT to get back the staked BCH.
            </p>

            <h4>
                To prevent SPAM, when a new validator is voted for the <span class="text-xl text-indigo-500">first time</span>, at least <span class="text-2xl text-indigo-500">500</span> coin-days are needed.
            </h4>

            <figure>
                <img class="w-full rounded-lg" src="https://i.imgur.com/6xN8n87.jpg" alt="" width="1310" height="873" />

                <figcaption class="text-center px-10">
                    The SmartBCH team has gone to great lengths to develop an elegant yet simple solution to maximize stakeholder utility.
                </figcaption>
            </figure>

            <h2>Ready For a Deep Dive Into XHedge?</h2>

            <p>
                Just like AnyHedge, XHedge needs one or more oracles to submit the price of BCH (relative to USD) onto smartBCH.
            </p>

            <p>
                The XHedge contract is deployed on the SmartBCH Mainnet at 0x11e34Ee274929d607E06C5e49bB0dc26Ca920BF2.
            </p>

            <p>
                The voting power from miners (PoW) and the voting power from BCH holders (PoS) will both be 50%.
            </p>

            <p>
                The Lever NFT is used to elect validators for smartBCH and its voting power is proportional to the accumulated coin-days. And Hedge NFT can be used to endorse the value of stable coins.
            </p>

            <p>
                Another important feature is that validators can use an optimized scheme to adjust the minimum gas price together, and the adjustable range will be larger than the current version.
            </p>

            <p>
                Suppose now BCH's price is <code>P0</code> and Bob wants to use XHedge to divide some BCH into a pair of LeverNFT/HedgeNFT. He must provide the following arguments:
            </p>

            <ol>
                <li>The initial collateral rate: <code>CR0</code></li>
                <li>The minimum collateral rate: <code>CRmin</code></li>
                <li>The value contained in the HedgeNFT (measured in USD): <code>Vh</code></li>
                <li>Penalty on closeout: <code>Pc</code></li>
                <li>Mature time: <code>MT</code></li>
                <li>A validator Bob would like to support</li>
                <li>The price oracle that this pair of NFTs will trust</li>
            </ol>

            <p>
                And then XHedge will deduct some BCH from Bob's account and lock them. The locked Amount is A=(1+CR0)*Vh/P0. After that Bob gets a LeverNFT and a HedgeNFT, which can be transferred to other persons. In some scenarios, these NFT can be both burnt and the BCH locked because of them will be liquidated:
            </p>

            <ol>
                <li>
                    Before the mature time, if the price drops to P1 and the locked BCH cannot meet the minimum collateral rate (A &lt; (1+CRmin)*Vh/P1), then the owner of HedgeNFT can initiate liquidation. The owner of HedgeNFT can get min(A, (1+Pc)*Vh/P1) and the owner of LeverNFT, max(0, A-(1+Pc)*Vh/P1).
                </li>

                <li>
                    After the mature time MT, any owner of these two NFTs can initiate liquidation. At the liquidation moment, if BCH's price is P2, then the owner of HedgeNFT can get min(A, Vh/P2) and the owner of LeverNFT, max(0, A-Vh/P2). The owner of HedgeNFT secures the value of her asset, while the owner of LeverNFT enlarges her risk and benefit.
                </li>

                <li>
                    At any time, if both LeverNFT and HedgeNFT belong to the same account, then this account can get all the locked BCH by burning both NTF tokens.
                </li>
            </ol>

            <p>
                The owner of LeverNFT can increase or decrease the locked BCH amount A:
            </p>

            <ol>
                <li>
                    At any time, she can deposit more BCH to enlarge A: add margin to avoid closeout
                </li>

                <li>
                    When the current price P is large enough for P>P0*CR0, she can withdraw some BCH to shrink A (reduce the margin), as long as A is no less than (1+CR0)*Vh/P after withdrawing. And, from the coins withdrawn by her, 0.5% is deducted and paid to the owner of HedgeNFT as a compensation fee.
                </li>
            </ol>

            <hr />

            <h2>Important Notes</h2>

            <p>
                Since anyone can send transactions to reset the accumulated coindays, it is very hard for the LeverNFT's owner to accumulate a lot of coindays.
                It will be very common for a validator to scan HedgeNFTs that are supporting her and turn the accumulated coin-days into votes before the next epoch.
            </p>

            <p>
                XHedge will be implemented in EVM bytecode (compiled from solidity), just like any other smart contract.
                Inside its storage, the accumulated coindays voted for each validator are recorded.
                When switching to another epoch, the staking logic of smartBCH will scan these records for voting information and then clears these records.
            </p>
        </div>
    </main>
</template>

<script>
/* Import components. */
// import HelloWorld from '@/components/HelloWorld'

export default {
    components: {
        // HelloWorld
    },
    data: () => {
        return {
            //
        }
    },
    created: function () {
        //
    },
    mounted: function () {
        //
    },
}
</script>
