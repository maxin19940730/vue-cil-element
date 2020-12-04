const useMock = (useMock) => {
    if (useMock) {
        // 引入mockjs

        const Mock = require('mockjs');

        // 获取 mock.Random 对象

        const Random = Mock.Random;

        // mock一组数据

        const produceNewsData = function () {

            let articles = [];

            for (let i = 0; i < 100; i++) {

                let newArticleObject = {

                    title: Random.csentence(5, 30), //  Random.csentence( min, max )

                    thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码

                    author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名

                    date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串

                }

                articles.push(newArticleObject)

            }



            return {

                articles: articles

            }

        }

        const produceListData = function (startPage=1,pageSize=10) {

            let list = [];

            for (let i = 0; i < pageSize; i++) {

                let newArticleObject = {

                    name: Random.cname(), //  Random.csentence( min, max )

                    address: Random.csentence(8, 15), // Random.cname() 随机生成一个常见的中文姓名

                    date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串

                }

                list.push(newArticleObject)

            }
            return {

                list,
                total: 1000,
                startPage,
                pageSize

            }

        }



        // Mock.mock( url, post/get , 返回的数据)；

        Mock.mock('/news/index', 'post', produceNewsData);
        Mock.mock(RegExp('/getList' + ".*"), 'get', (options)=>{
        
            let data=options.body ? JSON.parse(options.body) : {}
            const {startPage,pageSize}=data
            console.log(options,data)
            return produceListData(startPage,pageSize)
        });
    }
    
}

export default useMock
