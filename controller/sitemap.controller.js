module.exports.getsitemap = async function(req, res) {
    // res.sendFile('sitemap.xml', { root: __dirname });
    res.sendFile(__dirname + '/sitemap.xml')
};