<template>
    <main class="max-w-5xl mx-auto">
        <h1 class="text-3xl">Charts</h1>
    </main>
</template>

<script>
/* Import modules. */
import { ethers } from 'ethers'

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
    methods: {
        async test() {
            /* Validate embedded Web3 objects. */
            if (!window.ethereum && !window.bitcoin) {
                /* Validate embedded ethereum object. */
                if (window.bitcoin) {
                    console.info('Found Bitcoin provider.')
                } else if (window.ethereum) {
                    console.info('Found Ethereum provider.')
                } else {
                    return console.error('No Web3 provider found.')
                }
            }

            /* Initialize provider. */
            const provider = new ethers
                .providers
                .Web3Provider(window.ethereum, 'any')

            await provider.send('eth_requestAccounts', []) // <- this promps user to connect metamask

            /* Set signer. */
            const signer = provider.getSigner()

            /* Set Campaign ABI. */
            // const cAbi = this.$store.getters.getCampaignAbi
            const cAbi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"sn","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"sn","type":"uint256"},{"internalType":"uint96","name":"newAmount","type":"uint96"}],"name":"changeAmount","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"leverNFT","type":"uint256"},{"internalType":"uint256","name":"newValidator","type":"uint256"}],"name":"changeValidatorToVote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"token","type":"uint256"}],"name":"closeout","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"initCollateralRatio","type":"uint64"},{"internalType":"uint64","name":"minCollateralRatio","type":"uint64"},{"internalType":"uint64","name":"closeoutPenalty","type":"uint64"},{"internalType":"uint64","name":"matureTime","type":"uint64"},{"internalType":"uint256","name":"validatorToVote","type":"uint256"},{"internalType":"uint96","name":"hedgeValue","type":"uint96"},{"internalType":"address","name":"oracle","type":"address"}],"name":"createVault","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"initCollateralRatio_minCollateralRatio_closeoutPenalty_matureTime","type":"uint256"},{"internalType":"uint256","name":"validatorToVote","type":"uint256"},{"internalType":"uint256","name":"hedgeValue_oracle","type":"uint256"}],"name":"createVaultPacked","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"token","type":"uint256"}],"name":"liquidate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"sn","type":"uint256"}],"name":"loadVault","outputs":[{"components":[{"internalType":"uint64","name":"initCollateralRatio","type":"uint64"},{"internalType":"uint64","name":"minCollateralRatio","type":"uint64"},{"internalType":"uint64","name":"matureTime","type":"uint64"},{"internalType":"uint64","name":"lastVoteTime","type":"uint64"},{"internalType":"uint256","name":"validatorToVote","type":"uint256"},{"internalType":"uint96","name":"hedgeValue","type":"uint96"},{"internalType":"address","name":"oracle","type":"address"},{"internalType":"uint64","name":"closeoutPenalty","type":"uint64"},{"internalType":"uint96","name":"amount","type":"uint96"}],"internalType":"struct Vault","name":"vault","type":"tuple"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"sn","type":"uint256"},{"indexed":false,"internalType":"uint96","name":"newAmount","type":"uint96"}],"name":"UpdateAmount","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"sn","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"newValidator","type":"uint256"}],"name":"UpdateValidatorToVote","type":"event"},{"inputs":[{"internalType":"uint256","name":"sn","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"sn","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"validator","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"incrVotes","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newAccumulatedVotes","type":"uint256"}],"name":"Vote","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"validators","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"valToVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]

            // FOR DEVELOPMENT PURPOSES ONLY
            // The first campaign contract is hardcoded.
            // const cAddr = this.$store.getters.getCampaignAddr
            const cAddr = '0x11e34Ee274929d607E06C5e49bB0dc26Ca920BF2' // XHedge
            // const cAddr = '0x943F4002b68365fCC8F62eC65c3003aEcd391c0e' // XHedge (Amber)

            /* Initialize campaign instance. */
            const campaign = new ethers.Contract(cAddr, cAbi, signer)

            /* Set gas price. */
            // NOTE: Current minimum is 1.05 gWei (1,050,000,000)
            // const gasPrice = BigInt(1050000000)

            // FOR DEV PURPOSES ONLY
            // const comment = this.comment

            let val = await campaign
                .name()
            console.log('CONTRACT VAL', val)

            /* Reclaim pledge. */
            // await campaign
            //     .sendFeedback(comment, { gasPrice })
            //     .catch(err => {
            //         console.error(err)
            //
            //         /* Initialize message. */
            //         let message = ''
            //
            //         /* Validate message. */
            //         if (err.message) {
            //             message += err.message
            //         }
            //
            //         /* Validate data message. */
            //         if (err.data && err.data.message) {
            //             message += ' - ' + err.data.message
            //         }
            //
            //         /* Send notification request. */
            //         this.$store.dispatch('showNotif', {
            //             icon: 'error',
            //             title: 'MetaMask Error!',
            //             message,
            //         })
            //     })

        },

    },
    created: function () {
        this.test()
    },
    mounted: function () {
        //
    },
}
</script>
