const homeModel = require("../model/home.model");
const cf = require("../config/config.json");
const mailer = require("../Mailer/mailer.js");
// test 123
const Cloud = require("@tuyapi/cloud");
// test 123
// const tuyaApi = require("tuya-cloud-api");
// const tuyaCloud = require("tuya-cloud");
// const TuyAPI = require("tuyapi");
// const TuyaLink = require("@tuyapi/link");
// const {
//   tuyaApi
// } = require("tuya-cloud-api");


module.exports.getcustomer = async function (req, res) {
  // console.log(1111);
  // let api = new Cloud({
  //   key: 'w7th8kayacqn2uwfgf7x',
  //   secret: '064bd816da194caba351ec23254fe27f',
  //   certSign: '08E9089204A1E046AB578436497DEEA076572740D18A85B0ECDA0A2E574C35BB',
  // });
  // api.loginEx({
  //   email: 'kimlam2010@gmail.com',
  //   password: 'Vn611989'
  // }).then(async sid => {
  //   console.log(sid);

  //   api.request({
  //     action: 'tuya.m.location.list'
  //   }).then(async groups => {
  //     for (const group of groups) {
  //       api.request({
  //         action: 'tuya.m.my.group.device.list',
  //         gid: group.groupId
  //       }).then(async devicesArr => {
  //         for (const device of devicesArr) {
  //           console.log('group: "%s"\tdevice: "%s"\tdevId: "%s"', group.name, device.name, device.devId);
  //         }
  //       });
  //     }
  //   });
  // });

};

module.exports.postcustomer = async function (req, res) {
  let data = req.body;
  //await homeModel.addCustomer(data);
  const html = `Chào Trần Thức,
    <br/>
    Thông tin người cần thế chấp: 
    <br/>
    Tên: ${req.body.name}
    <br/> 
    Số Điện Thoại: ${req.body.sdt}
    <br/> 
    Email: ${req.body.email}
    <br/> 
    Ghi Chú: ${req.body.note}
    <br/> 
    `;

  await mailer.sendMail(
    cf.email.email_send,
    cf.email.email_receive,
    "Thông Tin Người Cần Thế Chấp",
    html
  );

  res.json({
    message: "Thêm thành công",
  });
};