// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.1 (Phaser v2.6.2)


/**
 * Level.
 */
function Level() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level_proto = Object.create(Phaser.State.prototype);
Level.prototype = Level_proto;
Level.prototype.constructor = Level;

Level.prototype.init = function () {
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	
};

Level.prototype.preload = function () {
	
	this.load.pack('level', 'assets/pack.json');
	
};

// Text
var score = 0;
var scoreText;
var stateText;

Level.prototype.create = function () {
	
	this.beforeCreate();
	
	var _BG = this.add.tileSprite(-11.0, -7.0, 1712.9580078125, 750.0, 'BG', null);
	_BG.scale.setTo(1.1289946683730876, 1.0275188997398834);
	_BG.fixedToCamera = true;
	
	var _endBoard = this.add.physicsGroup(Phaser.Physics.ARCADE);
	
	this.add.tileSprite(4843.0, 244.0, 25.0, 25.0, 'tiles', 'physics', _endBoard);
	
	var _back = this.add.group();
	
	this.add.sprite(4966.0, 1125.0, 'tiles', '5', _back);
	
	this.add.sprite(4840.0, 1124.0, 'tiles', '5', _back);
	
	this.add.sprite(4714.0, 1122.0, 'tiles', '5', _back);
	
	this.add.sprite(4586.0, 1001.0, 'tiles', '1', _back);
	
	this.add.sprite(4586.0, 1125.0, 'tiles', '4', _back);
	
	this.add.sprite(4554.0, 241.0, 'objects', 'Bush (2)', _back);
	
	this.add.sprite(4900.0, 252.0, 'objects', 'Stone', _back);
	
	var _Bush__2_ = this.add.tileSprite(103.0, 1459.0, 133.0, 65.0, 'objects', 'Bush (2)', _back);
	_Bush__2_.scale.setTo(1.2436090513997489, 1.4061541519275604);
	
	var __53 = this.add.sprite(747.0, 505.0, 'tiles', '15', _back);
	__53.scale.setTo(1.0, 1.0194144095043676);
	
	this.add.sprite(1114.0, 493.0, 'objects', 'Crate', _back);
	
	this.add.sprite(1074.0, 1143.0, 'tiles', '1', _back);
	
	this.add.tileSprite(1202.0, 1143.0, 512.0, 128.0, 'tiles', '2', _back);
	
	this.add.sprite(1714.0, 1143.0, 'tiles', '3', _back);
	
	this.add.sprite(1714.0, 1527.0, 'tiles', '16', _back);
	
	this.add.sprite(1074.0, 1527.0, 'tiles', '12', _back);
	
	this.add.tileSprite(1202.0, 1527.0, 512.0, 128.0, 'tiles', '9', _back);
	
	this.add.tileSprite(1074.0, 1271.0, 129.0, 256.0, 'tiles', '4', _back);
	
	this.add.tileSprite(1714.0, 1271.0, 128.0, 256.0, 'tiles', '6', _back);
	
	this.add.tileSprite(1202.0, 1271.0, 512.0, 256.0, 'tiles', '5', _back);
	
	this.add.sprite(-11.0, 1529.0, 'tiles', '1', _back);
	
	this.add.tileSprite(117.0, 1529.0, 512.0, 128.0, 'tiles', '2', _back);
	
	this.add.sprite(629.0, 1529.0, 'tiles', '3', _back);
	
	this.add.sprite(629.0, 1657.0, 'tiles', '16', _back);
	
	this.add.sprite(254.0, 1495.0, 'objects', 'Mushroom_2', _back);
	
	this.add.sprite(-11.0, 1657.0, 'tiles', '12', _back);
	
	this.add.tileSprite(117.0, 1657.0, 512.0, 128.0, 'tiles', '9', _back);
	
	this.add.sprite(1013.0, 1273.0, 'tiles', '1', _back);
	
	this.add.tileSprite(1141.0, 1273.0, 512.0, 128.0, 'tiles', '2', _back);
	
	this.add.sprite(1653.0, 1273.0, 'tiles', '3', _back);
	
	this.add.sprite(2037.0, 1657.0, 'tiles', '16', _back);
	
	this.add.sprite(1013.0, 1657.0, 'tiles', '12', _back);
	
	this.add.tileSprite(1141.0, 1657.0, 896.0, 128.0, 'tiles', '9', _back);
	
	this.add.tileSprite(1141.0, 1401.0, 512.0, 256.0, 'tiles', '5', _back);
	
	this.add.tileSprite(1653.0, 1401.0, 128.0, 128.0, 'tiles', '6', _back);
	
	this.add.tileSprite(1013.0, 1401.0, 129.0, 256.0, 'tiles', '4', _back);
	
	this.add.sprite(1781.0, 1529.0, 'tiles', '11', _back);
	
	this.add.sprite(1653.0, 1529.0, 'tiles', '10', _back);
	
	this.add.sprite(2037.0, 1529.0, 'tiles', '3', _back);
	
	this.add.sprite(1909.0, 1529.0, 'tiles', '2', _back);
	
	this.add.sprite(-11.0, 505.0, 'tiles', '1', _back);
	
	this.add.tileSprite(117.0, 505.0, 512.0, 128.0, 'tiles', '2', _back);
	
	var _Bush__2_1 = this.add.sprite(34.0, 382.0, 'objects', 'Bush (2)', _back);
	_Bush__2_1.scale.setTo(1.9849624160619828, 1.9384615456376617);
	
	this.add.sprite(629.0, 505.0, 'tiles', '3', _back);
	
	this.add.sprite(629.0, 633.0, 'tiles', '16', _back);
	
	this.add.sprite(27.0, 234.0, 'objects', 'Tree_3', _back);
	
	this.add.sprite(-11.0, 633.0, 'tiles', '12', _back);
	
	this.add.tileSprite(117.0, 633.0, 512.0, 128.0, 'tiles', '9', _back);
	
	this.add.sprite(1397.0, 377.0, 'tiles', '15', _back);
	
	this.add.sprite(1269.0, 377.0, 'tiles', '13', _back);
	
	this.add.sprite(1013.0, 761.0, 'tiles', '13', _back);
	
	this.add.sprite(1141.0, 761.0, 'tiles', '14', _back);
	
	this.add.sprite(1269.0, 761.0, 'tiles', '15', _back);
	
	this.add.sprite(503.0, 1030.0, 'tiles', '13', _back);
	
	this.add.sprite(631.0, 1030.0, 'tiles', '14', _back);
	
	this.add.sprite(759.0, 1030.0, 'tiles', '15', _back);
	
	this.add.sprite(29.0, 1233.0, 'objects', 'Tree_2', _back);
	
	this.add.sprite(509.0, 1494.0, 'objects', 'Mushroom_1', _back);
	
	this.add.sprite(729.0, 955.0, 'objects', 'Crate', _back);
	
	this.add.sprite(652.0, 955.0, 'objects', 'Crate', _back);
	
	this.add.sprite(575.0, 955.0, 'objects', 'Crate', _back);
	
	this.add.sprite(652.0, 878.0, 'objects', 'Crate', _back);
	
	this.add.sprite(1056.0, 491.0, 'objects', 'Tree_3', _back);
	
	this.add.sprite(1052.0, 724.0, 'objects', 'Mushroom_2', _back);
	
	this.add.sprite(1899.0, 1259.0, 'objects', 'Tree_3', _back);
	
	this.add.sprite(1855.0, 1457.0, 'objects', 'Crate', _back);
	
	this.add.sprite(1354.0, 340.0, 'objects', 'Mushroom_1', _back);
	
	this.add.sprite(1292.0, 107.0, 'objects', 'Tree_3', _back);
	
	this.add.sprite(-7.0, 446.0, 'objects', 'Bush (1)', _back);
	
	this.add.sprite(1642.0, 1110.0, 'objects', 'Tree_1', _back);
	
	var __84 = this.add.tileSprite(-46.0, 1742.0, 2245.2071533203125, 201.0968017578125, 'tiles', '18', _back);
	__84.scale.setTo(2.3228792370684173, 1.0);
	
	this.add.sprite(571.0, 456.0, 'objects', 'Stone', _back);
	
	this.add.sprite(1115.0, 1213.0, 'objects', 'Bush (1)', _back);
	
	this.add.sprite(1378.0, 1212.0, 'objects', 'Bush (2)', _back);
	
	this.add.sprite(1511.0, 1077.0, 'objects', 'Crate', _back);
	
	this.add.sprite(1471.0, 1001.0, 'objects', 'Crate', _back);
	
	var __4 = this.add.sprite(2268.0, 1447.0, 'tiles', '5', _back);
	__4.scale.setTo(1.0, 1.7200002799231782);
	
	var __5 = this.add.sprite(2150.0, 1444.6747193881415, 'tiles', '4', _back);
	__5.scale.setTo(1.0, 1.6911999451541957);
	
	var __3 = this.add.sprite(2150.0, 1287.0, 'tiles', '1', _back);
	__3.scale.setTo(1.0, 1.2916000728386954);
	
	this.add.sprite(1238.0, 691.0, 'objects', 'Crate', _back);
	
	var __25 = this.add.sprite(4790.0, 1478.0, 'tiles', '5', _back);
	__25.scale.setTo(2.0, 2.0);
	
	var __26 = this.add.sprite(4281.0, 1472.0, 'tiles', '4', _back);
	__26.scale.setTo(2.0, 2.0);
	
	var __27 = this.add.sprite(4536.0, 1478.0, 'tiles', '5', _back);
	__27.scale.setTo(2.0, 2.0);
	
	var __28 = this.add.sprite(4530.0, 1231.0, 'tiles', '2', _back);
	__28.scale.setTo(2.0, 2.0);
	
	var __30 = this.add.sprite(4281.0, 1231.0, 'tiles', '1', _back);
	__30.scale.setTo(2.0, 2.0);
	
	var __33 = this.add.sprite(4784.0, 1230.0, 'tiles', '2', _back);
	__33.scale.setTo(2.0, 2.0);
	
	this.add.sprite(2393.0, 1557.0, 'tiles', '6', _back);
	
	this.add.sprite(2395.0, 1435.0, 'tiles', '6', _back);
	
	this.add.sprite(2396.0, 1309.0, 'tiles', '6', _back);
	
	this.add.sprite(2396.0, 1189.0, 'tiles', '6', _back);
	
	this.add.sprite(2398.0, 1063.0, 'tiles', '6', _back);
	
	this.add.sprite(2276.0, 1331.0, 'tiles', '5', _back);
	
	this.add.sprite(2275.0, 1205.0, 'tiles', '4', _back);
	
	this.add.sprite(2274.0, 955.0, 'tiles', '4', _back);
	
	this.add.sprite(2274.0, 1080.0, 'tiles', '4', _back);
	
	this.add.sprite(2278.0, 832.0, 'tiles', '4', _back);
	
	this.add.sprite(2399.0, 944.0, 'tiles', '6', _back);
	
	this.add.sprite(2398.0, 820.0, 'tiles', '6', _back);
	
	this.add.sprite(2400.0, 694.0, 'tiles', '6', _back);
	
	this.add.sprite(2398.0, 572.0, 'tiles', '6', _back);
	
	this.add.sprite(2398.0, 447.0, 'tiles', '6', _back);
	
	this.add.sprite(2276.0, 711.0, 'tiles', '4', _back);
	
	this.add.sprite(2272.0, 582.0, 'tiles', '4', _back);
	
	this.add.sprite(2272.0, 457.0, 'tiles', '4', _back);
	
	this.add.sprite(2273.0, 333.0, 'tiles', '1', _back);
	
	this.add.sprite(2399.0, 332.0, 'tiles', '3', _back);
	
	this.add.sprite(4617.0, 304.0, 'tiles', '14', _back);
	
	this.add.sprite(4744.0, 304.0, 'tiles', '14', _back);
	
	this.add.sprite(4490.0, 304.0, 'tiles', '13', _back);
	
	this.add.sprite(4870.0, 304.0, 'tiles', '15', _back);
	
	this.add.sprite(1830.0, 522.0, 'tiles', '13', _back);
	
	this.add.sprite(1957.0, 522.0, 'tiles', '15', _back);
	
	this.add.sprite(1974.0, 471.0, 'objects', 'Stone', _back);
	
	this.add.sprite(2029.0, 461.0, 'objects', 'Sign_2', _back);
	
	this.add.sprite(1775.0, 228.0, 'objects', 'Tree_2', _back);
	
	this.add.sprite(1929.0, 486.0, 'objects', 'Mushroom_2', _back);
	
	var _Sign_3 = this.add.sprite(2516.0, 356.0, 'objects', 'Sign_2', _back);
	_Sign_3.angle = 90.0065174885702;
	_Sign_3.pivot.setTo(0.0, 64.0);
	
	this.add.sprite(3538.0, 1462.0, 'tiles', '1', _back);
	
	this.add.sprite(3918.0, 1462.0, 'tiles', '3', _back);
	
	this.add.sprite(3665.0, 1462.0, 'tiles', '2', _back);
	
	this.add.sprite(3792.0, 1462.0, 'tiles', '2', _back);
	
	this.add.sprite(3537.0, 1589.0, 'tiles', '4', _back);
	
	this.add.sprite(3918.0, 1587.0, 'tiles', '6', _back);
	
	this.add.sprite(3665.0, 1589.0, 'tiles', '5', _back);
	
	this.add.sprite(3791.0, 1589.0, 'tiles', '5', _back);
	
	this.add.sprite(2798.0, 1557.0, 'tiles', '13', _back);
	
	this.add.sprite(2924.0, 1557.0, 'tiles', '15', _back);
	
	this.add.sprite(3138.0, 1458.0, 'tiles', '13', _back);
	
	this.add.sprite(3262.0, 1458.0, 'tiles', '15', _back);
	
	this.add.sprite(3967.0, 1391.0, 'objects', 'Crate', _back);
	
	this.add.sprite(3966.0, 1315.0, 'objects', 'Crate', _back);
	
	this.add.sprite(4713.0, 1000.0, 'tiles', '2', _back);
	
	this.add.sprite(4840.0, 999.0, 'tiles', '2', _back);
	
	this.add.sprite(4966.0, 999.0, 'tiles', '2', _back);
	
	this.add.sprite(4093.0, 803.0, 'tiles', '13', _back);
	
	this.add.sprite(4218.0, 803.0, 'tiles', '15', _back);
	
	this.add.sprite(3594.0, 645.0, 'tiles', '13', _back);
	
	this.add.sprite(3719.0, 645.0, 'tiles', '15', _back);
	
	this.add.sprite(3197.0, 487.0, 'tiles', '13', _back);
	
	this.add.sprite(3324.0, 487.0, 'tiles', '15', _back);
	
	this.add.sprite(3664.0, 293.0, 'tiles', '13', _back);
	
	this.add.sprite(3791.0, 293.0, 'tiles', '15', _back);
	
	this.add.sprite(4060.0, 398.0, 'tiles', '13', _back);
	
	this.add.sprite(4187.0, 398.0, 'tiles', '15', _back);
	
	this.add.sprite(4817.0, 1158.0, 'objects', 'Crate', _back);
	
	this.add.sprite(3129.0, 1169.0, 'objects', 'Tree_2', _back);
	
	this.add.sprite(2794.0, 1276.0, 'objects', 'Tree_2', _back);
	
	this.add.sprite(2974.0, 1532.0, 'objects', 'Mushroom_1', _back);
	
	this.add.sprite(4151.0, 765.0, 'objects', 'Tree_1', _back);
	
	this.add.sprite(4803.0, 940.0, 'objects', 'Bush (1)', _back);
	
	this.add.sprite(4910.0, 943.0, 'objects', 'Bush (1)', _back);
	
	this.add.sprite(3825.0, 1424.0, 'objects', 'Mushroom_2', _back);
	
	this.add.sprite(3548.0, 1191.0, 'objects', 'Tree_3', _back);
	
	this.add.sprite(3587.0, 355.0, 'objects', 'Tree_2', _back);
	
	this.add.sprite(3179.0, 225.0, 'objects', 'Tree_3', _back);
	
	this.add.sprite(3730.0, 260.0, 'objects', 'Tree_1', _back);
	
	this.add.sprite(4097.0, 367.0, 'objects', 'Tree_1', _back);
	
	this.add.sprite(4216.0, 354.0, 'objects', 'Stone', _back);
	
	this.add.sprite(3840.0, 256.0, 'objects', 'Bush (4)', _back);
	
	var _Sign_1 = this.add.tileSprite(4811.0, 207.0, 63.0, 65.0, 'objects', 'Sign_1', _back);
	_Sign_1.scale.setTo(1.4571397776201203, 1.5538463948407075);
	
	var _player = this.add.sprite(224.0, 1419.0, 'player', 0);
	_player.anchor.setTo(0.5, 0.0);
	_player.animations.add('walk', [8, 9, 10, 11], 6, true);
	_player.animations.add('jump', [4, 5, 6, 7], 6, true);
	_player.animations.add('idle', [0, 1, 2, 3], 4, true);
	this.game.physics.arcade.enable(_player);
	_player.body.setSize(62.99998474121094, 93.0, 22.000015258789062, 20.0);
	
	var _water = this.add.tileSprite(-51.0, 1644.0, 2240.8822021484375, 99.0, 'tiles', '17');
	_water.scale.setTo(2.3236365773893084, 1.0739943503138425);
	
	var _fruits = this.add.physicsGroup(Phaser.Physics.ARCADE);
	_fruits.position.setTo(-11.0, -7.0);
	
	this.add.sprite(639.0, 444.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(564.0, 444.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(489.0, 444.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(414.0, 444.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(339.0, 444.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(264.0, 444.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(189.0, 444.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1100.0, 1200.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1150.0, 1200.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1200.0, 1200.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1250.0, 1200.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1300.0, 1200.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1350.0, 1200.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1400.0, 1200.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1450.0, 1200.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1500.0, 1200.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1875.0, 1350.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1925.0, 1300.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1950.0, 1250.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1975.0, 1200.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1975.0, 1150.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1950.0, 1100.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1900.0, 1050.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1100.0, 675.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1150.0, 675.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1200.0, 675.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(325.0, 1425.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(375.0, 1425.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(425.0, 1425.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(475.0, 1425.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(525.0, 1425.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(525.0, 1375.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(475.0, 1375.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(425.0, 1375.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(375.0, 1375.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(325.0, 1375.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(325.0, 1325.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(375.0, 1325.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(425.0, 1325.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(475.0, 1325.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(525.0, 1325.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1173.0, 1500.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1223.0, 1500.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1273.0, 1500.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1323.0, 1500.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1373.0, 1500.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1423.0, 1500.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1473.0, 1500.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1523.0, 1500.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1573.0, 1500.0, 'objects', 'fruit', _fruits);
	
	this.add.sprite(114.0, 444.0, 'objects', 'fruit', _fruits);
	
	var _banana_png = this.add.tileSprite(596.0, 1414.0, 101.0, 107.0, 'objects2', 'banana.png', _fruits);
	_banana_png.scale.setTo(0.4455445409479663, 0.4485981194908856);
	
	var _orange_png = this.add.tileSprite(4626.0, 154.0, 100.0, 98.0, 'objects2', 'orange.png', _fruits);
	_orange_png.scale.setTo(0.5, 0.5);
	
	var _orange_png1 = this.add.tileSprite(4721.0, 155.0, 100.0, 98.0, 'objects2', 'orange.png', _fruits);
	_orange_png1.scale.setTo(0.5, 0.5);
	
	var _lemon_png = this.add.tileSprite(2588.0, 484.0, 100.0, 82.0, 'objects2', 'lemon.png', _fruits);
	_lemon_png.scale.setTo(0.5, 0.5);
	
	var _lemon_png1 = this.add.tileSprite(2586.0, 591.0, 100.0, 82.0, 'objects2', 'lemon.png', _fruits);
	_lemon_png1.scale.setTo(0.5, 0.5);
	
	var _lemon_png2 = this.add.tileSprite(2587.0, 781.0, 100.0, 82.0, 'objects2', 'lemon.png', _fruits);
	_lemon_png2.scale.setTo(0.5, 0.5);
	
	var _lemon_png3 = this.add.tileSprite(2585.0, 883.0, 100.0, 82.0, 'objects2', 'lemon.png', _fruits);
	_lemon_png3.scale.setTo(0.5, 0.5);
	
	var _lemon_png4 = this.add.tileSprite(2586.0, 1088.0, 100.0, 82.0, 'objects2', 'lemon.png', _fruits);
	_lemon_png4.scale.setTo(0.5, 0.5);
	
	var _lemon_png5 = this.add.tileSprite(2593.0, 1187.0, 100.0, 82.0, 'objects2', 'lemon.png', _fruits);
	_lemon_png5.scale.setTo(0.5, 0.5);
	
	var _lemon_png6 = this.add.tileSprite(2591.0, 985.0, 100.0, 82.0, 'objects2', 'lemon.png', _fruits);
	_lemon_png6.scale.setTo(0.5, 0.5);
	
	var _lemon_png7 = this.add.tileSprite(2589.0, 687.0, 100.0, 82.0, 'objects2', 'lemon.png', _fruits);
	_lemon_png7.scale.setTo(0.5, 0.5);
	
	var _pear_png = this.add.tileSprite(2906.0, 1318.0, 101.0, 155.0, 'objects2', 'pear.png', _fruits);
	_pear_png.scale.setTo(0.5, 0.5);
	
	var _pear_png1 = this.add.tileSprite(3247.0, 1225.0, 101.0, 155.0, 'objects2', 'pear.png', _fruits);
	_pear_png1.scale.setTo(0.5, 0.5);
	
	var _pear_png2 = this.add.tileSprite(3683.0, 1276.0, 101.0, 155.0, 'objects2', 'pear.png', _fruits);
	_pear_png2.scale.setTo(0.5, 0.5);
	
	var _pear_png3 = this.add.tileSprite(3785.0, 1271.0, 101.0, 155.0, 'objects2', 'pear.png', _fruits);
	_pear_png3.scale.setTo(0.5, 0.5);
	
	var _pear_png4 = this.add.tileSprite(3881.0, 1271.0, 101.0, 155.0, 'objects2', 'pear.png', _fruits);
	_pear_png4.scale.setTo(0.5, 0.5);
	
	var _pear_png5 = this.add.tileSprite(3580.0, 1274.0, 101.0, 155.0, 'objects2', 'pear.png', _fruits);
	_pear_png5.scale.setTo(0.5, 0.5);
	
	var _strawberry_png = this.add.tileSprite(4748.0, 935.0, 95.0, 121.0, 'objects2', 'strawberry.png', _fruits);
	_strawberry_png.scale.setTo(0.5, 0.5);
	
	var _strawberry_png1 = this.add.tileSprite(4813.0, 935.0, 95.0, 121.0, 'objects2', 'strawberry.png', _fruits);
	_strawberry_png1.scale.setTo(0.5, 0.5);
	
	var _strawberry_png2 = this.add.tileSprite(4681.0, 934.0, 95.0, 121.0, 'objects2', 'strawberry.png', _fruits);
	_strawberry_png2.scale.setTo(0.5, 0.5);
	
	var _strawberry_png3 = this.add.tileSprite(4881.0, 933.0, 95.0, 121.0, 'objects2', 'strawberry.png', _fruits);
	_strawberry_png3.scale.setTo(0.5, 0.5);
	
	var _strawberry_png4 = this.add.tileSprite(4614.0, 935.0, 95.0, 121.0, 'objects2', 'strawberry.png', _fruits);
	_strawberry_png4.scale.setTo(0.5, 0.5);
	
	var _strawberry_png5 = this.add.tileSprite(4514.0, 800.0, 95.0, 121.0, 'objects2', 'strawberry.png', _fruits);
	_strawberry_png5.scale.setTo(0.5, 0.5);
	
	var _strawberry_png6 = this.add.tileSprite(4382.0, 732.0, 95.0, 121.0, 'objects2', 'strawberry.png', _fruits);
	_strawberry_png6.scale.setTo(0.5, 0.5);
	
	var _strawberry_png7 = this.add.tileSprite(4950.0, 931.0, 95.0, 121.0, 'objects2', 'strawberry.png', _fruits);
	_strawberry_png7.scale.setTo(0.5, 0.5);
	
	var _banana_png1 = this.add.tileSprite(3988.0, 571.0, 100.0, 108.0, 'objects2', 'banana.png', _fruits);
	_banana_png1.scale.setTo(0.5, 0.5);
	
	var _banana_png2 = this.add.tileSprite(4150.0, 653.0, 100.0, 108.0, 'objects2', 'banana.png', _fruits);
	_banana_png2.scale.setTo(0.5, 0.5);
	
	var _banana_png3 = this.add.tileSprite(3895.0, 716.0, 100.0, 108.0, 'objects2', 'banana.png', _fruits);
	_banana_png3.scale.setTo(0.5, 0.5);
	
	var _banana_png4 = this.add.tileSprite(3962.0, 386.0, 100.0, 108.0, 'objects2', 'banana.png', _fruits);
	_banana_png4.scale.setTo(0.5, 0.5);
	
	var _banana_png5 = this.add.tileSprite(3644.0, 442.0, 100.0, 108.0, 'objects2', 'banana.png', _fruits);
	_banana_png5.scale.setTo(0.5, 0.5);
	
	var _banana_png6 = this.add.tileSprite(3781.0, 444.0, 100.0, 108.0, 'objects2', 'banana.png', _fruits);
	_banana_png6.scale.setTo(0.5, 0.5);
	
	var _banana_png7 = this.add.tileSprite(3242.0, 297.0, 100.0, 108.0, 'objects2', 'banana.png', _fruits);
	_banana_png7.scale.setTo(0.5, 0.5);
	
	var _banana_png8 = this.add.tileSprite(3556.0, 222.0, 100.0, 108.0, 'objects2', 'banana.png', _fruits);
	_banana_png8.scale.setTo(0.5, 0.5);
	
	var _banana_png9 = this.add.tileSprite(3387.0, 305.0, 100.0, 108.0, 'objects2', 'banana.png', _fruits);
	_banana_png9.scale.setTo(0.5, 0.5);
	
	var _banana_png10 = this.add.tileSprite(4260.0, 656.0, 100.0, 108.0, 'objects2', 'banana.png', _fruits);
	_banana_png10.scale.setTo(0.5, 0.5);
	
	var _banana_png11 = this.add.tileSprite(2936.0, 373.0, 100.0, 108.0, 'objects2', 'banana.png', _fruits);
	_banana_png11.scale.setTo(0.5, 0.5);
	
	var _banana_png12 = this.add.tileSprite(3063.0, 376.0, 100.0, 108.0, 'objects2', 'banana.png', _fruits);
	_banana_png12.scale.setTo(0.5, 0.5);
	
	var _front = this.add.group();
	_front.position.setTo(-11.0, -7.0);
	
	var _Tree_10 = this.add.sprite(1302.0, 1083.0, 'objects', 'Tree_3', _front);
	_Tree_10.scale.setTo(0.7332871556082268, 0.7658318667609785);
	
	this.add.sprite(371.0, 465.0, 'objects', 'Bush (2)', _front);
	
	this.add.sprite(178.0, 464.0, 'objects', 'Bush (1)', _front);
	
	this.add.sprite(586.0, 997.0, 'objects', 'Stone', _front);
	
	this.add.sprite(783.0, 1007.0, 'objects', 'Bush (3)', _front);
	
	this.add.sprite(1181.0, 997.0, 'objects', 'Tree_2', _front);
	
	this.add.sprite(1601.0, 1253.0, 'objects', 'Tree_1', _front);
	
	this.add.sprite(2051.0, 1497.0, 'objects', 'Stone', _front);
	
	this.add.sprite(2063.0, 1442.0, 'objects', 'Sign_1', _front);
	
	this.add.sprite(1206.0, 717.0, 'objects', 'Bush (1)', _front);
	
	this.add.sprite(1293.0, 351.0, 'objects', 'Bush (3)', _front);
	
	this.add.sprite(36.0, 1490.0, 'objects', 'Bush (1)', _front);
	
	this.add.sprite(292.0, 1506.0, 'objects', 'Tree_1', _front);
	
	this.add.sprite(331.0, 1273.0, 'objects', 'Tree_3', _front);
	
	this.add.sprite(594.0, 1486.0, 'objects', 'Sign_2', _front);
	
	this.add.sprite(4751.0, 274.0, 'objects', 'Mushroom_1', _front);
	
	this.add.sprite(3308.0, 1425.0, 'objects', 'Stone', _front);
	
	this.add.sprite(4277.0, 768.0, 'objects', 'Bush (3)', _front);
	
	this.add.sprite(4715.0, 949.0, 'objects', 'Bush (2)', _front);
	
	this.add.sprite(4606.0, 946.0, 'objects', 'Bush (2)', _front);
	
	this.add.sprite(3902.0, 1430.0, 'objects', 'Bush (4)', _front);
	
	this.add.sprite(3898.0, 244.0, 'objects', 'Sign_2', _front);
	
	this.add.text(4835.0, 227.0, 'Finish', {"font":"bold 20px Arial"}, _front);
	
	var _collisionLayer = this.add.physicsGroup(Phaser.Physics.ARCADE);
	_collisionLayer.position.setTo(-11.0, -7.0);
	
	var _physics16 = this.add.sprite(-31.0, 1180.0, 'tiles', 'physics', _collisionLayer);
	_physics16.scale.setTo(1.0, 14.82696282289948);
	
	this.add.tileSprite(3.0, 1543.0, 759.6111068725586, 38.3333740234375, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(1028.0, 1289.0, 759.6111068725586, 38.3333740234375, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(516.0, 1047.0, 382.2159652709961, 17.3333740234375, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(4.0, 522.0, 865.0191268920898, 38.3333740234375, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(1027.0, 775.0, 378.2965316772461, 26.18060302734375, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(1285.0, 391.0, 247.6111068725586, 38.3333740234375, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(1085.0, 1160.0, 765.6111068725586, 38.3333740234375, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(1793.0, 1546.0, 378.0112533569336, 38.3333740234375, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(587.0, 963.0, 228.8677978515625, 14.8726806640625, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(664.0, 886.0, 74.00665283203125, 14.8726806640625, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(1524.0, 1087.0, 72.9166259765625, 25.0, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(1484.0, 1010.0, 72.9166259765625, 25.0, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(1868.0, 1469.0, 72.9166259765625, 25.0, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(1125.0, 500.0, 74.00665283203125, 14.8726806640625, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(1643.0, 973.0, 25.0, 25.0, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(-17.0, 1734.0, 5104.971374511719, 35.271728515625, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(5046.0, -15.0, 19.0283203125, 1754.3823356628418, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(2167.0, 1318.0, 25.0, 420.8447265625, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(2167.0, 1299.0, 124.360107421875, 25.0, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(1253.0, 700.0, 68.2000732421875, 25.0, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(2494.0, 375.0, 25.0, 1365.3676452636719, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(2300.0, 348.0, 220.609619140625, 25.0, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(2299.0, 367.0, 25.0, 966.2070922851562, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(4511.0, 316.0, 486.3759765625, 25.0, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(4306.0, 1242.0, 742.70751953125, 25.0, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(1844.0, 532.0, 249.64013671875, 25.0, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(3557.0, 1476.0, 493.33349609375, 25.0, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(3983.0, 1323.0, 63.015869140625, 145.9600830078125, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(2817.0, 1568.0, 236.182373046875, 25.0, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(3156.0, 1468.0, 230.920166015625, 25.0, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(4606.0, 1012.0, 445.47998046875, 25.0, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(4108.0, 816.0, 243.0556640625, 25.0, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(3611.0, 654.0, 244.444580078125, 25.0, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(3216.0, 498.0, 243.33349609375, 25.0, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(3680.166748046875, 303.0, 245.833251953125, 25.0, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(4078.0, 408.0, 243.33349609375, 25.0, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(4832.0, 1168.0, 68.9814453125, 25.0, 'tiles', 'physics', _collisionLayer);
	
	var _baddies = this.add.physicsGroup(Phaser.Physics.ARCADE);
	
	this.add.tileSprite(863.0, 1565.0, 66.0, 48.0, 'objects2', 'Cheeseburger.png', _baddies);
	
	var _gameboy_png7 = this.add.tileSprite(1337.0, 1602.0, 100.0, 99.0, 'objects2', 'gameboy.png', _baddies);
	_gameboy_png7.scale.setTo(0.5, 0.5);
	
	var _tv2_png6 = this.add.tileSprite(41.0, 1435.0, 259.0, 269.0, 'objects2', 'tv2.png', _baddies);
	_tv2_png6.scale.setTo(0.3, 0.3);
	
	var _gameboy_png6 = this.add.tileSprite(3098.0, 1601.0, 100.0, 99.0, 'objects2', 'gameboy.png', _baddies);
	_gameboy_png6.scale.setTo(0.5, 0.5);
	
	var _gameboy_png5 = this.add.tileSprite(4157.0, 1369.0, 100.0, 99.0, 'objects2', 'gameboy.png', _baddies);
	_gameboy_png5.scale.setTo(0.5, 0.5);
	
	var _gameboy_png4 = this.add.tileSprite(1556.0, 1192.0, 100.0, 99.0, 'objects2', 'gameboy.png', _baddies);
	_gameboy_png4.scale.setTo(0.5, 0.5);
	
	var _gameboy_png3 = this.add.tileSprite(1450.0, 819.0, 100.0, 99.0, 'objects2', 'gameboy.png', _baddies);
	_gameboy_png3.scale.setTo(0.5, 0.5);
	
	var _gameboy_png2 = this.add.tileSprite(3932.0, 929.0, 100.0, 99.0, 'objects2', 'gameboy.png', _baddies);
	_gameboy_png2.scale.setTo(0.5, 0.5);
	
	var _gameboy_png = this.add.tileSprite(2740.0, 1175.0, 100.0, 99.0, 'objects2', 'gameboy.png', _baddies);
	_gameboy_png.scale.setTo(0.5, 0.5);
	
	var _tv2_png5 = this.add.tileSprite(529.0, 862.0, 259.0, 269.0, 'objects2', 'tv2.png', _baddies);
	_tv2_png5.scale.setTo(0.3, 0.3);
	
	var _tv2_png4 = this.add.tileSprite(2174.0, 1199.0, 259.0, 269.0, 'objects2', 'tv2.png', _baddies);
	_tv2_png4.scale.setTo(0.3, 0.3);
	
	var _tv2_png3 = this.add.tileSprite(3427.0, 658.0, 259.0, 269.0, 'objects2', 'tv2.png', _baddies);
	_tv2_png3.scale.setTo(0.3, 0.3);
	
	var _tv2_png2 = this.add.tileSprite(4387.0, 934.0, 259.0, 269.0, 'objects2', 'tv2.png', _baddies);
	_tv2_png2.scale.setTo(0.3, 0.3);
	
	var _tv2_png = this.add.tileSprite(4389.0, 392.0, 259.0, 269.0, 'objects2', 'tv2.png', _baddies);
	_tv2_png.scale.setTo(0.3, 0.3);
	
	this.add.tileSprite(1909.0, 1622.0, 66.0, 48.0, 'objects2', 'Cheeseburger.png', _baddies);
	
	this.add.tileSprite(676.0, 436.0, 66.0, 48.0, 'objects2', 'Cheeseburger.png', _baddies);
	
	this.add.tileSprite(1657.0, 526.0, 66.0, 48.0, 'objects2', 'Cheeseburger.png', _baddies);
	
	this.add.tileSprite(2762.0, 371.0, 66.0, 48.0, 'objects2', 'Cheeseburger.png', _baddies);
	
	this.add.tileSprite(4933.0, 1168.0, 66.0, 48.0, 'objects2', 'Cheeseburger.png', _baddies);
	
	this.add.tileSprite(3432.0, 1522.0, 66.0, 48.0, 'objects2', 'Cheeseburger.png', _baddies);
	
	this.add.tileSprite(3719.0, 1420.0, 66.0, 48.0, 'objects2', 'Cheeseburger.png', _baddies);
	
	var _tv2_png1 = this.add.tileSprite(4759.0, 1564.0, 259.0, 269.0, 'objects2', 'tv2.png', _baddies);
	_tv2_png1.scale.setTo(0.3, 0.3);
	
	_endBoard.setAll("body.allowGravity", false);
	_fruits.setAll("body.allowGravity", false);
	_collisionLayer.setAll("body.immovable", true);
	_collisionLayer.setAll("body.allowGravity", false);
	_collisionLayer.setAll("renderable", false);
	_collisionLayer.setAll("body.checkCollision.down", false);
	_baddies.setAll("body.allowGravity", false);
	
	
	// fields
	
	this.fBG = _BG;
	this.fEndBoard = _endBoard;
	this.fPlayer = _player;
	this.fWater = _water;
	this.fFruits = _fruits;
	this.fCollisionLayer = _collisionLayer;
	this.fBaddies = _baddies;
	this.afterCreate();
	
	// Display Score
	scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
	scoreText.fixedToCamera = true;
	 
	// Display end Message
	stateText = this.add.text(400, 250,' ', { font: '84px Arial', fill: '#000' });
	stateText.anchor.setTo(0.5, 0.5);
	stateText.visible = false;
	stateText.fixedToCamera = true; 
	
};

/* --- end generated code --- */
/*
 var score = 0;
 var scoreText;
 var stateText;
 
 scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
 
stateText = this.add.text(400, 250,' ', { font: '84px Arial', fill: '#000' });
	stateText.anchor.setTo(0.5, 0.5);
	stateText.visible = false;
	stateText.fixedToCamera = true; 
 * */

Level.prototype.beforeCreate = function() {
	// world
	this.world.resize(5000, 1800);
	
	
	// start the Arcade system
	this.game.physics.startSystem(Phaser.Physics.ARCADE);

	// set the global gravity
	this.game.physics.arcade.gravity.y = 800;

	// create the cursors
	this.cursors = this.input.keyboard.createCursorKeys();
};

Level.prototype.afterCreate = function () {
	this.camera.follow(this.fPlayer);
};

Level.prototype.update = function() {
	this.physics.arcade.collide(this.fPlayer, this.fCollisionLayer);

	if (this.cursors.left.isDown) {
		// move to the left
		this.fPlayer.body.velocity.x = -200;
	} else if (this.cursors.right.isDown) {
		// move to the right
		this.fPlayer.body.velocity.x = 200;
	} else {
		// dont move in the horizontal
		this.fPlayer.body.velocity.x = 0;
	}

	// a flag to know if the player is (down) touching the platforms
	var touching = this.fPlayer.body.touching.down;

	if (touching && this.cursors.up.isDown) {
		// jump if the player is on top of a platform and the up key is pressed
		this.fPlayer.body.velocity.y = -600;
	}
	
	if (touching) {
	    if (this.fPlayer.body.velocity.x == 0) {
	        // if it is not moving horizontally play the idle
	        this.fPlayer.play("idle");
	    } else {
	        // if it is moving play the walk
	        this.fPlayer.play("walk");
	        console.log("walk");
	    }
	} else {
	    // it is not touching the platforms so it means it is jumping.
	    this.fPlayer.play("jump");
	}
	
	// update the facing of the player
	if (this.cursors.left.isDown) {
	    // face left
	    this.fPlayer.scale.x = -1;
	} else if (this.cursors.right.isDown) {
	   // face right
	   this.fPlayer.scale.x = 1;
	}
	
	// fruits
	this.physics.arcade.overlap(this.fPlayer, this.fFruits, this.playerVsFruit, null, this);
	
	//Baddies
	this.physics.arcade.overlap(this.fPlayer, this.fBaddies, this.playerVsBaddies, null, this);
	
	// End Board
	this.physics.arcade.overlap(this.fPlayer, this.fEndBoard, this.playerVsBoard, null, this);
	
	// water
	this.fWater.tilePosition.x -= 1;
	this.fBG.tilePosition.x = -this.camera.x;
};

/**
 * @param {Phaser.Sprite}
 *            player
 * @param {Phaser.Sprite}
 *            fruit
 */
Level.prototype.playerVsFruit = function(player, fruit) {
	fruit.body.enable = false;
	
	this.add.tween(fruit).to({
		y : fruit.y - 50
	}, 1000, "Expo.easeOut", true);
	
	this.add.tween(fruit.scale).to({
		x : 2,
		y : 2
	}, 1000, "Linear", true);

	this.add.tween(fruit).to({
		alpha : 0.2
	}, 1000, "Linear", true).onComplete.add(fruit.kill, fruit);
	
	// Update score
	score += 5;
	scoreText.text = 'Score: ' + score;
};

/**
 * @param {Phaser.Sprite}
 *            player
 * @param {Phaser.Sprite}
 *            baddie
 */
Level.prototype.playerVsBaddies = function(player, baddie) {
	baddie.body.enable = false;
	
	this.add.tween(baddie).to({
		y : baddie.y - 50
	}, 1000, "Expo.easeOut", true);
	
	this.add.tween(baddie.scale).to({
		x : 2,
		y : 2
	}, 1000, "Linear", true);

	this.add.tween(baddie).to({
		alpha : 0.2
	}, 1000, "Linear", true).onComplete.add(baddie.kill, baddie);
	
	// Update score
	score -= 20;
	scoreText.text = 'Score: ' + score;
};

/**
 * @param {Phaser.Sprite}
 *            player
 * @param {Phaser.Sprite}
 *            endBoard
 */
Level.prototype.playerVsBoard = function(player, endBoard) {
	stateText.text = " Victoire!, \n Pour recommencer,\n Cliquer ici";
	stateText.visible = true;
	player.body.enable = false;
	
	// The "click to restart" handler
	this.input.onTap.addOnce(restart, this);
};

function restart(){
	this.state.restart();
}