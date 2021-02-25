const homeModel = require("../model/home.model");
const cf = require("../config/config.json");
const mailer = require("../Mailer/mailer.js");
module.exports.gethome = async function(req, res) {
    //const data = await homeModel.loadCustomer();

    res.render("index");
};
module.exports.posthome = async function(req, res) {
    let data = req.body;

    console.log(data);

    // let items = {
    //     name: data.username1,
    //     sdt: data.sdt1,
    //     email: data.email1,
    //     note: data.note1
    // };

    // const user = await homeModel.addCustomer(items);



    // const html = `Chào Trần Thức,
    // <br/>
    // Thông tin người cần thế chấp: 
    // <br/>
    // Tên: ${items.name}
    // <br/> 
    // Số Điện Thoại: ${items.sdt}
    // <br/> 
    // Email: ${items.email}
    // <br/> 
    // Ghi Chú: ${items.note}
    // <br/> 
    // `;

    // await mailer.sendMail(
    //     cf.email.email_send,
    //     cf.email.email_receive,
    //     "Thông Tin Người Cần Thế Chấp",
    //     html
    // );
    res.redirect('/');
};