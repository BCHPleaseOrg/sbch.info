<template>
    <main class="mt-10 max-w-4xl mx-auto flex flex-col items-center border-4 border-gray-200 p-5 rounded-xl">
        <h1 class="text-4xl my-3 text-gray-800 border-b-2 border-gray-300">
            Contract Verification
        </h1>

        <section class="mt-5 w-full">
            <h2 class="text-2xl text-gray-700 ml-3">
                Contract Address
            </h2>

            <input
                v-model="contractAddress"
                class="w-2/3 border-2 border-gray-300 rounded-xl shadow"
                type="text"
                placeholder="Enter the smart contract address here"
            >
        </section>

        <section class="mt-5 w-full">
            <h2 class="text-2xl text-gray-700 ml-3">
                Contract Name
            </h2>

            <input
                v-model="contractName"
                class="w-2/3 border-2 border-gray-300 rounded-xl shadow"
                type="text"
                placeholder="Enter the smart contract name here"
            >
        </section>

        <section class="mt-5 w-full">
            <h2 class="text-2xl text-gray-700 ml-3">
                Flattened Source Code
            </h2>

            <textarea
                v-model="sourceCode"
                class="w-full border-2 border-gray-300 rounded-xl shadow"
                rows="4"
                placeholder="Copy and paste the flattened source code here"
            />

            <p class="text-gray-700 text-lg">
                OR.. You can also choose a file from your system.
            </p>

            <input
                class="text-xl text-gray-700 font-medium"
                type="file"
                name="resume"
                onchange="document.getElementById('fileName').innerText = this.value"
            >

            <div class="w-1/2 mt-3 py-1 px-5 text-lg text-gray-700 font-bold border-2 border-yellow-300 bg-yellow-100 rounded-lg" id="fileName" />
        </section>

        <section class="mt-5 w-full">
            <h2 class="text-2xl text-gray-700 ml-3">
                Solidity Compiler Version
            </h2>

            <select
                v-model="compilerVersion"
                class="w-1/2 px-5 text-lg text-gray-700 font-bold rounded-xl"
            >
                <option>v0.8.13+commit.abaa5c0e</option>
                <option>v0.8.12+commit.f00d7308</option>
                <option>v0.8.11+commit.d7f03943</option>
                <option>v0.8.10+commit.fc410830</option>
                <option>v0.8.9+commit.e5eed63a</option>
                <option>v0.8.8+commit.dddeac2f</option>
                <option>v0.8.7+commit.e28d00a7</option>
                <option>v0.8.6+commit.11564f7e</option>
                <option>v0.8.5+commit.a4f2e591</option>
                <option>v0.8.4+commit.c7e474f2</option>
                <option>v0.8.3+commit.8d00100c</option>
                <option>v0.8.2+commit.661d1103</option>
                <option>v0.8.1+commit.df193b15</option>
                <option>v0.8.0+commit.c7dfd78e</option>
                <option>v0.7.6+commit.7338295f</option>
                <option>v0.7.5+commit.eb77ed08</option>
                <option>v0.7.4+commit.3f05b770</option>
                <option>v0.7.3+commit.9bfce1f6</option>
                <option>v0.7.2+commit.51b20bc0</option>
                <option>v0.7.1+commit.f4a555be</option>
                <option>v0.7.0+commit.9e61f92b</option>
                <option>v0.6.12+commit.27d51765</option>
                <option>v0.6.11+commit.5ef660b1</option>
                <option>v0.6.10+commit.00c0fcaf</option>
                <option>v0.6.9+commit.3e3065ac</option>
                <option>v0.6.8+commit.0bbfe453</option>
                <option>v0.6.7+commit.b8d736ae</option>
                <option>v0.6.6+commit.6c089d02</option>
                <option>v0.6.5+commit.f956cc89</option>
                <option>v0.6.4+commit.1dca32f3</option>
                <option>v0.6.3+commit.8dda9521</option>
                <option>v0.6.2+commit.bacdbe57</option>
                <option>v0.6.1+commit.e6f7d5a4</option>
                <option>v0.6.0+commit.26b70077</option>
                <option>v0.5.17+commit.d19bba13</option>
                <option>v0.5.16+commit.9c3226ce</option>
                <option>v0.5.15+commit.6a57276f</option>
                <option>v0.5.14+commit.01f1aaa4</option>
                <option>v0.5.13+commit.5b0b510c</option>
                <option>v0.5.12+commit.7709ece9</option>
                <option>v0.5.11+commit.22be8592</option>
                <option>v0.5.10+commit.5a6ea5b1</option>
                <option>v0.5.9+commit.c68bc34e</option>
                <option>v0.5.8+commit.23d335f2</option>
                <option>v0.5.7+commit.6da8b019</option>
                <option>v0.5.6+commit.b259423e</option>
                <option>v0.5.5+commit.47a71e8f</option>
                <option>v0.5.4+commit.9549d8ff</option>
                <option>v0.5.3+commit.10d17f24</option>
                <option>v0.5.2+commit.1df8f40c</option>
                <option>v0.5.1+commit.c8a2cb62</option>
                <option>v0.5.0+commit.1d4f565a</option>
                <option>v0.4.26+commit.4563c3fc</option>
                <option>v0.4.25+commit.59dbf8f1</option>
                <option>v0.4.24+commit.e67f0147</option>
                <option>v0.4.23+commit.124ca40d</option>
                <option>v0.4.22+commit.4cb486ee</option>
                <option>v0.4.21+commit.dfe3193c</option>
                <option>v0.4.20+commit.3155dd80</option>
                <option>v0.4.19+commit.c4cbbb05</option>
                <option>v0.4.18+commit.9cf6e910</option>
                <option>v0.4.17+commit.bdeb9e52</option>
                <option>v0.4.16+commit.d7661dd9</option>
                <option>v0.4.15+commit.8b45bddb</option>
                <option>v0.4.14+commit.c2215d46</option>
                <option>v0.4.13+commit.0fb4cb1a</option>
                <option>v0.4.12+commit.194ff033</option>
                <option>v0.4.11+commit.68ef5810</option>
                <option>v0.4.10+commit.9e8cc01b</option>
            </select>
        </section>

        <section class="mt-5 w-full">
            <h2 class="text-2xl text-gray-700 ml-3">
                EVM Version
            </h2>

            <select
                v-model="evmVersion"
                class="w-1/2 px-5 text-lg text-gray-700 font-bold rounded-xl"
            >
                <option value="" selected>Default</option>
                <option value="london">London</option>
                <option value="berlin">Berlin</option>
                <option value="istanbul">Istanbul</option>
                <option value="petersburg">Petersburg</option>
                <option value="constantinople">Constantinople</option>
                <option value="byzantium">Byzantium</option>
                <option value="spuriousDragon">Spurious Dragon</option>
                <option value="tangerineWhistle">Tangerine Whistle</option>
            </select>
        </section>

        <section class="mt-5 w-full">
            <h2 class="text-2xl text-gray-700 ml-3">
                Compiler Optimization
            </h2>

            <div class="ml-5">
                <div class="inline mx-5">
                    <input type="radio" @click="optimization = true">
                    <span class="text-xl mx-2">Yes</span>
                </div>

                <div class="inline mx-5">
                    <input type="radio" @click="optimization = false">
                    <span class="text-xl mx-2">No</span>
                </div>
            </div>
        </section>

        <section class="mt-5 w-full">
            <h2 class="text-2xl text-gray-700 ml-3">
                Number Of Runs
            </h2>

            <input
                v-model="numberOfRuns"
                class="w-1/4 border-2 border-gray-300 rounded-xl shadow"
                type="text"
                placeholder="Enter the number of runs here"
            >
        </section>

        <section class="mt-5 w-full">
            <h2 class="text-2xl text-gray-700 ml-3">
                Constructor's Signature
            </h2>

            <input
                v-model="signature"
                class="w-full border-2 border-gray-300 rounded-xl shadow"
                type="text"
                placeholder="constructor(string memory name, string memory symbol) public"
            >
        </section>

        <section class="mt-5 w-full">
            <h2 class="text-2xl text-gray-700 ml-3">
                Constructor's Arguments
            </h2>

            <input
                v-model="arguments"
                class="w-full border-2 border-gray-300 rounded-xl shadow"
                type="text"
                placeholder="&quot;ExampleCoin&quot;, &quot;EXC&quot;"
            >
        </section>

        <section class="mt-5 w-full">
            <h2 class="text-2xl text-gray-700 ml-3">
                Opensource License
            </h2>

            <select
                v-model="license"
                class="w-1/2 px-5 text-lg text-gray-700 font-bold rounded-xl"
            >
                <option value="" selected>1. No License (None)</option>
                <option value="unlicense">2. The Unlicense (Unlicense)</option>
                <option value="mit">3. MIT License (MIT)</option>
                <option value="gpl-2">4. GNU General Public License v2.0 (GNU GPLv2)</option>
                <option value="gpl-3">5. GNU General Public License v3.0 (GNU GPLv3)</option>
                <option value="lgpl-2_1">6. GNU Lesser General Public License v2.1 (GNU LGPLv2.1)</option>
                <option value="lgpl-3">7. GNU Lesser General Public License v3.0 (GNU LGPLv3)</option>
                <option value="bsd-2">8. BSD 2-clause "Simplified" license (BSD-2-Clause)</option>
                <option value="bsd-3">9. BSD 3-clause "New" Or "Revised" license* (BSD-3-Clause)</option>
                <option value="mpl-2">10. Mozilla Public License 2.0 (MPL-2.0)</option>
                <option value="osl-3">11. Open Software License 3.0 (OSL-3.0)</option>
                <option value="apache-2">12. Apache 2.0 (Apache-2.0)</option>
                <option value="agpl-3">13. GNU Affero General Public License (GNU AGPLv3)</option>
                <option value="bsl-1_1">14. Business Source License (BSL 1.1)</option>
            </select>
        </section>

        <button
            class="mt-7 mb-3 py-3 px-10 text-2xl text-gray-800 font-bold border-2 border-blue-500 bg-blue-200 rounded-xl hover:text-gray-900 hover:bg-blue-300"
            @click="test"
        >
            Submit For Verification
        </button>

    </main>
</template>

<script>
/* Import modules. */
import { ethers } from 'ethers'

/* Import components. */
// import Header from '@/components/Header'
// import UnderConstruction from '@/components/UnderConstruction'

export default {
    components: {
        // Header,
        // UnderConstruction,
    },
    data: () => {
        return {
            abi: null,
            account: null,
            arguments: null,
            bytecode: null,
            compilerVersion: null,
            contractAddress: null,
            contractName: null,
            evmVersion: null,
            license: null,
            numberOfRuns: null,
            optimization: null,
            provider: null,
            signature: null,
            sourceCode: null,
        }
    },
    methods: {
        test() {
            const jsonForPost = {
                contractAddress: this.contractAddress,
                contractName: this.contractName,
                flattenedSource: this.sourceCode,
                compilerVersion: this.compilerVersion,
                optimizationUsed: '',
                runs: '',
                constructor: '',
                constructorArguments: '',
                licenseType: '',
                evmVersion: this.evmVersion,
            }

            console.log('JSON FOR POST', jsonForPost)
        },

        async verify() {
            /* Initialize provider. */
            // const provider = new ethers
            //     .providers
            //     .Web3Provider(window.ethereum, 'any')

            /* Initialize provider. */
            this.provider = new ethers
                .providers
                .JsonRpcProvider('https://smartbch.fountainhead.cash/mainnet')
                // .JsonRpcProvider('https://smartbch.devops.cash/mainnet')
                // .JsonRpcProvider('https://smartbch.devops.cash/testnet')

            const contract = new ethers
                .Contract(this.contractAddress, this.abi, this.provider)
            console.log('CONTRACT', contract)

            const retrieve = await contract
                .retrieve()
                .catch(err => console.error(err))
            console.log('RETRIEVE:', retrieve, Number(retrieve))

            const bytecode = await this.provider
                .getCode(this.contractAddress)
            console.log('BYTECODE', bytecode)

            // const sample = require('./sample.txt')
            // const source = fs.readFileSync('./sample.sol', 'UTF-8')
            console.log('SOURCE', this.source)

        },

    },
    created: async function () {
        /* Initialize default number of runs. */
        this.numberOfRuns = 200

    },
    mounted: function () {
        //
    },
}
</script>

<style scoped>
/*  */
</style>
