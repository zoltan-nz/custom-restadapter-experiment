import DS from 'ember-data';

export default DS.Model.extend({

  parentProduct: DS.belongsTo('product', {inverse: 'childProducts'),
  childProducts: DS.hasMany('product', {inverse: 'parentProduct'})

  user:             DS.belongsTo('user', {async: true}),

  name:             DS.attr('string'),
  contentType:      DS.attr('string'),
  filename:         DS.attr('string'),

  showDesign:       DS.attr('boolean'),
  fabOfWeekWinner:  DS.attr('boolean'),
  //c1: 6710886,
  //c2: 16777215,
  //c3: 10066329,
  //c4: 13421772,
  //colorkey: 2147483647,
  //for_sale: true,
  //collection_id: 39960,
  //at_s3: true,
  //spoints: 581905,
  //for_sale_at: 1352393593,
  //spurrency: 573643,
  //for_sale_as_wallpaper: true,
  //for_sale_as_decal: true,
  //for_sale_as_fabric: true,
  //short_description: "",
  //for_sale_as_gift_wrap: true,
  //app_id: 0,
  //user: {},
  thumbnailUrl:     DS.attr('string')
  //tags: [],
  //spoints_fabric: 2915,
  //spoints_wall: 741,
  //spoints_gift: 620,
  //spurrency_fabric: 86,
  //spurrency_wall: 14,
  //spurrency_gift: 16,
  //num_favorites: 1687


});
