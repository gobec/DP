function viewCreatePlate(req, res) {
    res.send('View create Plate');
  }
  
  function viewModifyPlate(req, res) {
    res.send('View modify Plate');
  }
  
  function viewDeletePlate(req, res) {
    res.send('View delete Plate');
  }
  
  module.exports.viewCreatePlate = viewCreatePlate;
  module.exports.viewModifyPlate = viewModifyPlate;
  module.exports.viewDeletePlate = viewDeletePlate;