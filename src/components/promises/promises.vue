<template>
    <div>
    </div>
</template>

<script>
//  import * as API from '../../store/api'
//  import Axios from 'axios'

//  import iconv from 'iconv-lite'
//  import https from 'https'
  import TOOLS from '../../assets/js/tool.js'
var https = require('https');
var iconv = require('iconv-lite');
    export default {
        data(){
            return {
              jsonData:''
            }
        },
        components: {},
        computed: {},
        mounted () {
            let HOST=process.env.API_ROOT;
          let createFileName='7d5a98d215c2126d7ebc92d69510f755';
          let url = HOST +'/'+ createFileName + '.json';
          https.get(url, function (response) {
            let datas = [];
            let size = 0;
            response.on('data', function (data) {
              datas.push(data);
              size += data.length;
            });
            response.on('end', function () {
              if (datas && datas.length > 0 && size > 0) {
                let buff = Buffer.concat(datas, size);
                let result = iconv.decode(buff, 'utf8');//转码//let result = buff.toString();//不需要转编码,直接tostring
                let dataA = (JSON.parse(result)).data;
                let dataB = TOOLS.decrypt(dataA);
                dataB=TOOLS.decodeUnicode(dataB);

                console.log('--DATA 原始: ', dataA);
                console.log('--DATA 解密: ', dataB);
              } else {
               console.log("222222222_______404");
              }
            });
          }).on('error', function () {
           console.log("33333333333____404");
          });
        },
        methods: {}
    }
</script>

<style>

</style>
