//const solanaWeb3 = require('solana');
//console.log(solanaWeb3);

//const chalk = require('chalk');
//import * as Buffer from './node_modules/@solana/buffer-layout/node_modules/buffer/index.js';
//console.log(Buffer);

//eimport * as Layout from './node_modules/@solana/buffer-layout/lib/Layout.js';
//console.log(Layout);

//import  useWallet  from './node_modules/@solana/wallet-adapter-react/cjs/useWallet.js'
//console.log(useWallet);
//import { LAMPORTS_PER_SOL,clusterApiUrl } from './node_modules/@solana/web3.js/lib/index.iife.min.js'

//import {publickey} from './node_modules/@solana/web3.js/src/';
//console.log(PublicKey);
(async () => {
  const web3 = require('@solana/web3.js');
  
  let connection = new web3.Connection(web3.clusterApiUrl('devnet'), 'confirmed');

  let publicKeyFrom = new web3.PublicKey('7PCR6SAobnpAQLjmfA4YpZmZ5ivcaELTy5XXGF46z7k8');

  const solana = new web3.Connection("http://sample-endpoint-name.network.quiknode.pro/token-goes-here/");
  console.log(await connection.getAccountInfo(publicKeyFrom));

})();
