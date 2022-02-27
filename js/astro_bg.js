
    function init() {

      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");

      draw(ctx);
    }

    function draw(ctx) {

      var alpha = ctx.globalAlpha;

      // 1/
      ctx.save();
      ctx.globalAlpha = alpha * 0.30;

      // 1//
      ctx.save();
      ctx.globalAlpha = alpha * 1.00;

      // 1///
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0.0, 1063.4);
      ctx.lineTo(1063.4, 1063.4);
      ctx.lineTo(1063.4, 0.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(0.0, 1063.4);
      ctx.closePath();
      ctx.clip();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1062.0, 531.7);
      ctx.bezierCurveTo(1062.0, 238.8, 824.6, 1.4, 531.7, 1.4);
      ctx.bezierCurveTo(238.8, 1.4, 1.4, 238.8, 1.4, 531.7);
      ctx.bezierCurveTo(1.4, 824.6, 238.8, 1062.0, 531.7, 1062.0);
      ctx.bezierCurveTo(824.6, 1062.0, 1062.0, 824.6, 1062.0, 531.7);
      ctx.closePath();
      ctx.lineWidth = 2.8;
      ctx.strokeStyle = "rgb(214, 183, 130)";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1039.0, 501.8);
      ctx.lineTo(1061.1, 500.6);
      ctx.lineCap = "butt";
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1036.9, 476.2);
      ctx.lineTo(1058.8, 473.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1032.5, 445.2);
      ctx.lineTo(1054.3, 441.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1027.5, 420.0);
      ctx.lineTo(1049.0, 415.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1019.7, 389.7);
      ctx.lineTo(1040.9, 383.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1011.9, 365.1);
      ctx.lineTo(1032.8, 357.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1000.8, 335.9);
      ctx.lineTo(1021.2, 327.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(990.3, 312.4);
      ctx.lineTo(1010.2, 302.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(975.9, 284.7);
      ctx.lineTo(995.2, 273.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(962.8, 262.5);
      ctx.lineTo(981.5, 250.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(945.3, 236.6);
      ctx.lineTo(963.3, 223.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(929.8, 216.0);
      ctx.lineTo(947.1, 202.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(909.7, 192.1);
      ctx.lineTo(926.2, 177.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(892.0, 173.3);
      ctx.lineTo(907.7, 157.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(869.3, 151.9);
      ctx.lineTo(884.0, 135.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(849.6, 135.3);
      ctx.lineTo(863.4, 118.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(824.6, 116.5);
      ctx.lineTo(837.4, 98.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(803.2, 102.2);
      ctx.lineTo(815.0, 83.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(776.4, 86.2);
      ctx.lineTo(787.0, 66.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(753.5, 74.3);
      ctx.lineTo(763.1, 54.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(724.9, 61.6);
      ctx.lineTo(733.4, 41.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(700.9, 52.4);
      ctx.lineTo(708.2, 31.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(671.1, 43.0);
      ctx.lineTo(677.1, 21.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(646.2, 36.6);
      ctx.lineTo(651.1, 15.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(615.5, 30.5);
      ctx.lineTo(619.1, 8.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(590.0, 26.9);
      ctx.lineTo(592.5, 4.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(558.9, 24.2);
      ctx.lineTo(560.0, 2.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(531.7, 23.5);
      ctx.lineTo(531.7, 1.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(501.8, 24.4);
      ctx.lineTo(500.6, 2.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(476.2, 26.5);
      ctx.lineTo(473.8, 4.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(445.2, 30.9);
      ctx.lineTo(441.5, 9.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(419.9, 35.9);
      ctx.lineTo(415.1, 14.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(389.7, 43.7);
      ctx.lineTo(383.5, 22.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(365.1, 51.5);
      ctx.lineTo(357.9, 30.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(335.9, 62.6);
      ctx.lineTo(327.4, 42.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(312.4, 73.1);
      ctx.lineTo(302.9, 53.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(284.7, 87.5);
      ctx.lineTo(273.9, 68.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(262.5, 100.7);
      ctx.lineTo(250.8, 81.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(236.6, 118.1);
      ctx.lineTo(223.7, 100.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(216.0, 133.6);
      ctx.lineTo(202.2, 116.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(192.1, 153.7);
      ctx.lineTo(177.3, 137.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(173.3, 171.4);
      ctx.lineTo(157.7, 155.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(151.9, 194.1);
      ctx.lineTo(135.4, 179.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(135.3, 213.8);
      ctx.lineTo(118.0, 200.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(116.5, 238.8);
      ctx.lineTo(98.4, 226.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(102.2, 260.2);
      ctx.lineTo(83.5, 248.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(86.2, 287.1);
      ctx.lineTo(66.8, 276.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(74.3, 309.9);
      ctx.lineTo(54.4, 300.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(61.6, 338.5);
      ctx.lineTo(41.2, 330.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(52.4, 362.5);
      ctx.lineTo(31.6, 355.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(43.0, 392.3);
      ctx.lineTo(21.7, 386.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(36.6, 417.3);
      ctx.lineTo(15.0, 412.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(30.5, 447.9);
      ctx.lineTo(8.7, 444.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(26.9, 473.4);
      ctx.lineTo(4.9, 470.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(24.2, 504.6);
      ctx.lineTo(2.1, 503.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(23.5, 531.7);
      ctx.lineTo(1.4, 531.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(24.4, 561.6);
      ctx.lineTo(2.4, 562.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(26.5, 587.3);
      ctx.lineTo(4.6, 589.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(30.9, 618.2);
      ctx.lineTo(9.2, 621.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(35.9, 643.5);
      ctx.lineTo(14.4, 648.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(43.7, 673.7);
      ctx.lineTo(22.5, 679.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(51.5, 698.3);
      ctx.lineTo(30.7, 705.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(62.6, 727.5);
      ctx.lineTo(42.2, 736.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(73.1, 751.0);
      ctx.lineTo(53.2, 760.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(87.6, 778.7);
      ctx.lineTo(68.2, 789.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(100.7, 800.9);
      ctx.lineTo(81.9, 812.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(118.1, 826.9);
      ctx.lineTo(100.1, 839.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(133.6, 847.4);
      ctx.lineTo(116.3, 861.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(153.7, 871.4);
      ctx.lineTo(137.3, 886.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(171.4, 890.1);
      ctx.lineTo(155.7, 905.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(194.1, 911.5);
      ctx.lineTo(179.5, 928.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(213.8, 928.1);
      ctx.lineTo(200.0, 945.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(238.8, 946.9);
      ctx.lineTo(226.0, 965.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(260.2, 961.3);
      ctx.lineTo(248.4, 979.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(287.1, 977.2);
      ctx.lineTo(276.4, 996.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(309.9, 989.1);
      ctx.lineTo(300.3, 1009.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(338.5, 1001.8);
      ctx.lineTo(330.1, 1022.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(362.5, 1011.0);
      ctx.lineTo(355.2, 1031.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(392.3, 1020.4);
      ctx.lineTo(386.3, 1041.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(417.3, 1026.9);
      ctx.lineTo(412.3, 1048.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(447.9, 1033.0);
      ctx.lineTo(444.3, 1054.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(473.4, 1036.5);
      ctx.lineTo(470.9, 1058.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(504.6, 1039.2);
      ctx.lineTo(503.4, 1061.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(531.5, 1039.9);
      ctx.lineTo(531.4, 1062.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(561.6, 1039.0);
      ctx.lineTo(562.9, 1061.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(587.3, 1036.9);
      ctx.lineTo(589.7, 1058.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(618.2, 1032.5);
      ctx.lineTo(621.9, 1054.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(643.5, 1027.5);
      ctx.lineTo(648.3, 1049.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(673.7, 1019.7);
      ctx.lineTo(679.9, 1040.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(698.3, 1011.9);
      ctx.lineTo(705.5, 1032.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(727.5, 1000.8);
      ctx.lineTo(736.0, 1021.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(751.0, 990.3);
      ctx.lineTo(760.6, 1010.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(778.7, 975.9);
      ctx.lineTo(789.5, 995.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(800.9, 962.8);
      ctx.lineTo(812.6, 981.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(826.9, 945.3);
      ctx.lineTo(839.7, 963.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(847.4, 929.8);
      ctx.lineTo(861.2, 947.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(871.4, 909.7);
      ctx.lineTo(886.1, 926.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(890.1, 892.0);
      ctx.lineTo(905.7, 907.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(911.5, 869.3);
      ctx.lineTo(928.0, 884.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(928.1, 849.6);
      ctx.lineTo(945.4, 863.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(946.9, 824.6);
      ctx.lineTo(965.0, 837.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(961.3, 803.2);
      ctx.lineTo(979.9, 815.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(977.2, 776.4);
      ctx.lineTo(996.6, 787.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(989.1, 753.5);
      ctx.lineTo(1009.0, 763.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1001.8, 724.9);
      ctx.lineTo(1022.3, 733.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1011.0, 700.9);
      ctx.lineTo(1031.8, 708.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1020.4, 671.1);
      ctx.lineTo(1041.7, 677.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1026.9, 646.2);
      ctx.lineTo(1048.4, 651.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1033.0, 615.5);
      ctx.lineTo(1054.8, 619.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1036.5, 590.0);
      ctx.lineTo(1058.5, 592.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1039.2, 558.9);
      ctx.lineTo(1061.3, 560.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1039.9, 531.7);
      ctx.lineTo(1062.0, 531.7);
      ctx.stroke();

      // 1/
      ctx.restore();
      ctx.restore();

      // 1//
      ctx.save();
      ctx.globalAlpha = alpha * 1.00;

      // 1///
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(21.8, 1041.6);
      ctx.lineTo(1041.6, 1041.6);
      ctx.lineTo(1041.6, 21.8);
      ctx.lineTo(21.8, 21.8);
      ctx.lineTo(21.8, 1041.6);
      ctx.closePath();
      ctx.clip();

      // 1///
      ctx.beginPath();
      ctx.moveTo(997.0, 531.7);
      ctx.bezierCurveTo(997.0, 274.7, 788.7, 66.4, 531.7, 66.4);
      ctx.bezierCurveTo(274.7, 66.4, 66.4, 274.7, 66.4, 531.7);
      ctx.bezierCurveTo(66.4, 788.7, 274.7, 997.0, 531.7, 997.0);
      ctx.bezierCurveTo(788.7, 997.0, 997.0, 788.7, 997.0, 531.7);
      ctx.closePath();
      ctx.lineWidth = 2.8;
      ctx.strokeStyle = "rgb(214, 183, 130)";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(646.0, 415.8);
      ctx.bezierCurveTo(646.0, 352.7, 594.8, 301.6, 531.7, 301.6);
      ctx.bezierCurveTo(468.6, 301.6, 417.5, 352.7, 417.5, 415.8);
      ctx.bezierCurveTo(417.5, 478.9, 468.6, 530.1, 531.7, 530.1);
      ctx.bezierCurveTo(594.8, 530.1, 646.0, 478.9, 646.0, 415.8);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1040.2, 531.7);
      ctx.bezierCurveTo(1040.2, 250.9, 812.6, 23.2, 531.7, 23.2);
      ctx.bezierCurveTo(250.9, 23.2, 23.2, 250.9, 23.2, 531.7);
      ctx.bezierCurveTo(23.2, 812.6, 250.9, 1040.2, 531.7, 1040.2);
      ctx.bezierCurveTo(812.6, 1040.2, 1040.2, 812.6, 1040.2, 531.7);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1024.5, 531.7);
      ctx.bezierCurveTo(1024.5, 259.6, 803.9, 38.9, 531.7, 38.9);
      ctx.bezierCurveTo(259.6, 38.9, 38.9, 259.6, 38.9, 531.7);
      ctx.bezierCurveTo(38.9, 803.9, 259.6, 1024.5, 531.7, 1024.5);
      ctx.bezierCurveTo(803.9, 1024.5, 1024.5, 803.9, 1024.5, 531.7);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(39.0, 523.3);
      ctx.bezierCurveTo(98.4, 497.2, 301.7, 415.8, 531.7, 415.8);
      ctx.bezierCurveTo(761.7, 415.8, 965.1, 497.2, 1024.4, 523.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(723.9, 77.8);
      ctx.bezierCurveTo(823.3, 141.3, 889.2, 252.6, 889.2, 379.3);
      ctx.bezierCurveTo(889.2, 576.8, 729.2, 736.8, 531.7, 736.8);
      ctx.bezierCurveTo(334.3, 736.8, 174.2, 576.8, 174.2, 379.3);
      ctx.bezierCurveTo(174.2, 252.8, 239.9, 141.7, 339.0, 78.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(531.7, 1024.5);
      ctx.lineTo(531.7, 38.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(38.9, 531.7);
      ctx.lineTo(1024.5, 531.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(777.8, 958.8);
      ctx.lineTo(284.9, 105.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(285.6, 958.8);
      ctx.lineTo(778.5, 105.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(958.7, 286.0);
      ctx.lineTo(105.7, 778.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(958.2, 778.8);
      ctx.lineTo(104.2, 285.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1022.3, 574.6);
      ctx.bezierCurveTo(975.9, 668.1, 839.2, 873.1, 531.7, 873.1);
      ctx.bezierCurveTo(223.9, 873.1, 87.2, 667.7, 41.0, 574.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(184.4, 555.9);
      ctx.lineTo(177.7, 558.2);
      ctx.lineTo(176.2, 551.2);
      ctx.lineTo(174.8, 558.2);
      ctx.lineTo(168.1, 555.9);
      ctx.lineTo(173.4, 560.7);
      ctx.lineTo(168.1, 565.4);
      ctx.lineTo(174.8, 563.1);
      ctx.lineTo(176.2, 570.1);
      ctx.lineTo(177.7, 563.1);
      ctx.lineTo(184.4, 565.4);
      ctx.lineTo(179.1, 560.7);
      ctx.lineTo(184.4, 555.9);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(146.5, 447.4);
      ctx.lineTo(139.7, 449.7);
      ctx.lineTo(138.3, 442.7);
      ctx.lineTo(136.9, 449.7);
      ctx.lineTo(130.1, 447.4);
      ctx.lineTo(135.5, 452.2);
      ctx.lineTo(130.1, 456.9);
      ctx.lineTo(136.9, 454.6);
      ctx.lineTo(138.3, 461.6);
      ctx.lineTo(139.7, 454.6);
      ctx.lineTo(146.5, 456.9);
      ctx.lineTo(141.1, 452.2);
      ctx.lineTo(146.5, 447.4);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(414.7, 474.1);
      ctx.lineTo(408.0, 476.4);
      ctx.lineTo(406.6, 469.4);
      ctx.lineTo(405.1, 476.4);
      ctx.lineTo(398.4, 474.1);
      ctx.lineTo(403.7, 478.8);
      ctx.lineTo(398.4, 483.5);
      ctx.lineTo(405.1, 481.3);
      ctx.lineTo(406.6, 488.3);
      ctx.lineTo(408.0, 481.3);
      ctx.lineTo(414.7, 483.5);
      ctx.lineTo(409.4, 478.8);
      ctx.lineTo(414.7, 474.1);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(381.8, 421.8);
      ctx.lineTo(375.0, 424.1);
      ctx.lineTo(373.6, 417.1);
      ctx.lineTo(372.2, 424.1);
      ctx.lineTo(365.4, 421.8);
      ctx.lineTo(370.7, 426.5);
      ctx.lineTo(365.4, 431.2);
      ctx.lineTo(372.2, 429.0);
      ctx.lineTo(373.6, 436.0);
      ctx.lineTo(375.0, 429.0);
      ctx.lineTo(381.8, 431.2);
      ctx.lineTo(376.4, 426.5);
      ctx.lineTo(381.8, 421.8);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(398.1, 375.9);
      ctx.lineTo(391.3, 378.1);
      ctx.lineTo(389.9, 371.1);
      ctx.lineTo(388.5, 378.1);
      ctx.lineTo(381.8, 375.9);
      ctx.lineTo(387.1, 380.6);
      ctx.lineTo(381.8, 385.3);
      ctx.lineTo(388.5, 383.0);
      ctx.lineTo(389.9, 390.0);
      ctx.lineTo(391.3, 383.0);
      ctx.lineTo(398.1, 385.3);
      ctx.lineTo(392.8, 380.6);
      ctx.lineTo(398.1, 375.9);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(313.8, 503.6);
      ctx.lineTo(307.0, 505.9);
      ctx.lineTo(305.6, 498.9);
      ctx.lineTo(304.2, 505.9);
      ctx.lineTo(297.4, 503.6);
      ctx.lineTo(302.8, 508.4);
      ctx.lineTo(297.4, 513.1);
      ctx.lineTo(304.2, 510.8);
      ctx.lineTo(305.6, 517.8);
      ctx.lineTo(307.0, 510.8);
      ctx.lineTo(313.8, 513.1);
      ctx.lineTo(308.4, 508.4);
      ctx.lineTo(313.8, 503.6);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(334.2, 633.6);
      ctx.lineTo(327.4, 635.9);
      ctx.lineTo(326.0, 628.9);
      ctx.lineTo(324.6, 635.9);
      ctx.lineTo(317.8, 633.6);
      ctx.lineTo(323.2, 638.4);
      ctx.lineTo(317.8, 643.1);
      ctx.lineTo(324.6, 640.8);
      ctx.lineTo(326.0, 647.8);
      ctx.lineTo(327.4, 640.8);
      ctx.lineTo(334.2, 643.1);
      ctx.lineTo(328.8, 638.4);
      ctx.lineTo(334.2, 633.6);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(276.0, 639.2);
      ctx.lineTo(269.2, 641.4);
      ctx.lineTo(267.8, 634.4);
      ctx.lineTo(266.4, 641.4);
      ctx.lineTo(259.6, 639.2);
      ctx.lineTo(265.0, 643.9);
      ctx.lineTo(259.6, 648.6);
      ctx.lineTo(266.4, 646.3);
      ctx.lineTo(267.8, 653.3);
      ctx.lineTo(269.2, 646.3);
      ctx.lineTo(276.0, 648.6);
      ctx.lineTo(270.6, 643.9);
      ctx.lineTo(276.0, 639.2);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(330.1, 750.2);
      ctx.lineTo(323.4, 752.5);
      ctx.lineTo(322.0, 745.5);
      ctx.lineTo(320.6, 752.5);
      ctx.lineTo(313.8, 750.2);
      ctx.lineTo(319.1, 754.9);
      ctx.lineTo(313.8, 759.6);
      ctx.lineTo(320.6, 757.4);
      ctx.lineTo(322.0, 764.4);
      ctx.lineTo(323.4, 757.4);
      ctx.lineTo(330.1, 759.6);
      ctx.lineTo(324.8, 754.9);
      ctx.lineTo(330.1, 750.2);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(356.7, 732.1);
      ctx.lineTo(349.9, 734.4);
      ctx.lineTo(348.5, 727.4);
      ctx.lineTo(347.1, 734.4);
      ctx.lineTo(340.3, 732.1);
      ctx.lineTo(345.7, 736.8);
      ctx.lineTo(340.3, 741.6);
      ctx.lineTo(347.1, 739.3);
      ctx.lineTo(348.5, 746.3);
      ctx.lineTo(349.9, 739.3);
      ctx.lineTo(356.7, 741.6);
      ctx.lineTo(351.3, 736.8);
      ctx.lineTo(356.7, 732.1);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(335.9, 790.5);
      ctx.lineTo(329.1, 792.8);
      ctx.lineTo(327.7, 785.8);
      ctx.lineTo(326.3, 792.8);
      ctx.lineTo(319.5, 790.5);
      ctx.lineTo(324.9, 795.2);
      ctx.lineTo(319.5, 799.9);
      ctx.lineTo(326.3, 797.7);
      ctx.lineTo(327.7, 804.7);
      ctx.lineTo(329.1, 797.7);
      ctx.lineTo(335.9, 799.9);
      ctx.lineTo(330.5, 795.2);
      ctx.lineTo(335.9, 790.5);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(235.6, 845.8);
      ctx.lineTo(228.8, 848.1);
      ctx.lineTo(227.4, 841.1);
      ctx.lineTo(226.0, 848.1);
      ctx.lineTo(219.2, 845.8);
      ctx.lineTo(224.6, 850.5);
      ctx.lineTo(219.2, 855.3);
      ctx.lineTo(226.0, 853.0);
      ctx.lineTo(227.4, 860.0);
      ctx.lineTo(228.8, 853.0);
      ctx.lineTo(235.6, 855.3);
      ctx.lineTo(230.2, 850.5);
      ctx.lineTo(235.6, 845.8);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(492.8, 797.0);
      ctx.lineTo(486.0, 799.3);
      ctx.lineTo(484.6, 792.3);
      ctx.lineTo(483.2, 799.3);
      ctx.lineTo(476.4, 797.0);
      ctx.lineTo(481.7, 801.7);
      ctx.lineTo(476.4, 806.5);
      ctx.lineTo(483.2, 804.2);
      ctx.lineTo(484.6, 811.2);
      ctx.lineTo(486.0, 804.2);
      ctx.lineTo(492.8, 806.5);
      ctx.lineTo(487.4, 801.7);
      ctx.lineTo(492.8, 797.0);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(518.7, 898.5);
      ctx.lineTo(512.0, 900.8);
      ctx.lineTo(510.6, 893.8);
      ctx.lineTo(509.2, 900.8);
      ctx.lineTo(502.4, 898.5);
      ctx.lineTo(507.7, 903.2);
      ctx.lineTo(502.4, 908.0);
      ctx.lineTo(509.2, 905.7);
      ctx.lineTo(510.6, 912.7);
      ctx.lineTo(512.0, 905.7);
      ctx.lineTo(518.7, 908.0);
      ctx.lineTo(513.4, 903.2);
      ctx.lineTo(518.7, 898.5);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(365.3, 919.4);
      ctx.lineTo(358.6, 921.7);
      ctx.lineTo(357.2, 914.7);
      ctx.lineTo(355.8, 921.7);
      ctx.lineTo(349.0, 919.4);
      ctx.lineTo(354.3, 924.1);
      ctx.lineTo(349.0, 928.9);
      ctx.lineTo(355.8, 926.6);
      ctx.lineTo(357.2, 933.6);
      ctx.lineTo(358.6, 926.6);
      ctx.lineTo(365.3, 928.9);
      ctx.lineTo(360.0, 924.1);
      ctx.lineTo(365.3, 919.4);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(631.6, 904.5);
      ctx.lineTo(624.8, 906.8);
      ctx.lineTo(623.4, 899.8);
      ctx.lineTo(622.0, 906.8);
      ctx.lineTo(615.2, 904.5);
      ctx.lineTo(620.6, 909.2);
      ctx.lineTo(615.2, 913.9);
      ctx.lineTo(622.0, 911.7);
      ctx.lineTo(623.4, 918.7);
      ctx.lineTo(624.8, 911.7);
      ctx.lineTo(631.6, 913.9);
      ctx.lineTo(626.3, 909.2);
      ctx.lineTo(631.6, 904.5);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(766.2, 861.7);
      ctx.lineTo(759.4, 864.0);
      ctx.lineTo(758.0, 857.0);
      ctx.lineTo(756.6, 864.0);
      ctx.lineTo(749.8, 861.7);
      ctx.lineTo(755.2, 866.4);
      ctx.lineTo(749.8, 871.1);
      ctx.lineTo(756.6, 868.9);
      ctx.lineTo(758.0, 875.9);
      ctx.lineTo(759.4, 868.9);
      ctx.lineTo(766.2, 871.1);
      ctx.lineTo(760.8, 866.4);
      ctx.lineTo(766.2, 861.7);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(683.9, 802.7);
      ctx.lineTo(677.1, 805.0);
      ctx.lineTo(675.7, 798.0);
      ctx.lineTo(674.3, 805.0);
      ctx.lineTo(667.5, 802.7);
      ctx.lineTo(672.9, 807.5);
      ctx.lineTo(667.5, 812.2);
      ctx.lineTo(674.3, 809.9);
      ctx.lineTo(675.7, 816.9);
      ctx.lineTo(677.1, 809.9);
      ctx.lineTo(683.9, 812.2);
      ctx.lineTo(678.5, 807.5);
      ctx.lineTo(683.9, 802.7);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(375.9, 669.5);
      ctx.lineTo(369.2, 671.8);
      ctx.lineTo(367.8, 664.8);
      ctx.lineTo(366.4, 671.8);
      ctx.lineTo(359.6, 669.5);
      ctx.lineTo(364.9, 674.2);
      ctx.lineTo(359.6, 678.9);
      ctx.lineTo(366.4, 676.7);
      ctx.lineTo(367.8, 683.6);
      ctx.lineTo(369.2, 676.7);
      ctx.lineTo(375.9, 678.9);
      ctx.lineTo(370.6, 674.2);
      ctx.lineTo(375.9, 669.5);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(471.5, 692.2);
      ctx.lineTo(464.8, 694.5);
      ctx.lineTo(463.3, 687.5);
      ctx.lineTo(461.9, 694.5);
      ctx.lineTo(455.2, 692.2);
      ctx.lineTo(460.5, 696.9);
      ctx.lineTo(455.2, 701.6);
      ctx.lineTo(461.9, 699.4);
      ctx.lineTo(463.3, 706.4);
      ctx.lineTo(464.8, 699.4);
      ctx.lineTo(471.5, 701.6);
      ctx.lineTo(466.2, 696.9);
      ctx.lineTo(471.5, 692.2);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(623.6, 623.3);
      ctx.lineTo(616.8, 625.6);
      ctx.lineTo(615.4, 618.6);
      ctx.lineTo(614.0, 625.6);
      ctx.lineTo(607.2, 623.3);
      ctx.lineTo(612.6, 628.1);
      ctx.lineTo(607.2, 632.8);
      ctx.lineTo(614.0, 630.5);
      ctx.lineTo(615.4, 637.5);
      ctx.lineTo(616.8, 630.5);
      ctx.lineTo(623.6, 632.8);
      ctx.lineTo(618.2, 628.1);
      ctx.lineTo(623.6, 623.3);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(741.7, 735.2);
      ctx.lineTo(734.9, 737.4);
      ctx.lineTo(733.5, 730.4);
      ctx.lineTo(732.1, 737.4);
      ctx.lineTo(725.3, 735.2);
      ctx.lineTo(730.7, 739.9);
      ctx.lineTo(725.3, 744.6);
      ctx.lineTo(732.1, 742.3);
      ctx.lineTo(733.5, 749.3);
      ctx.lineTo(734.9, 742.3);
      ctx.lineTo(741.7, 744.6);
      ctx.lineTo(736.3, 739.9);
      ctx.lineTo(741.7, 735.2);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(897.4, 602.3);
      ctx.lineTo(890.6, 604.5);
      ctx.lineTo(889.2, 597.5);
      ctx.lineTo(887.8, 604.5);
      ctx.lineTo(881.0, 602.3);
      ctx.lineTo(886.4, 607.0);
      ctx.lineTo(881.0, 611.7);
      ctx.lineTo(887.8, 609.4);
      ctx.lineTo(889.2, 616.4);
      ctx.lineTo(890.6, 609.4);
      ctx.lineTo(897.4, 611.7);
      ctx.lineTo(892.1, 607.0);
      ctx.lineTo(897.4, 602.3);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(955.8, 495.5);
      ctx.lineTo(949.0, 497.8);
      ctx.lineTo(947.6, 490.8);
      ctx.lineTo(946.2, 497.8);
      ctx.lineTo(939.5, 495.5);
      ctx.lineTo(944.8, 500.3);
      ctx.lineTo(939.5, 505.0);
      ctx.lineTo(946.2, 502.7);
      ctx.lineTo(947.6, 509.7);
      ctx.lineTo(949.0, 502.7);
      ctx.lineTo(955.8, 505.0);
      ctx.lineTo(950.5, 500.3);
      ctx.lineTo(955.8, 495.5);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(904.3, 294.0);
      ctx.lineTo(897.6, 296.3);
      ctx.lineTo(896.2, 289.3);
      ctx.lineTo(894.8, 296.3);
      ctx.lineTo(888.0, 294.0);
      ctx.lineTo(893.3, 298.7);
      ctx.lineTo(888.0, 303.5);
      ctx.lineTo(894.8, 301.2);
      ctx.lineTo(896.2, 308.2);
      ctx.lineTo(897.6, 301.2);
      ctx.lineTo(904.3, 303.5);
      ctx.lineTo(899.0, 298.7);
      ctx.lineTo(904.3, 294.0);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(819.0, 409.2);
      ctx.lineTo(812.3, 411.5);
      ctx.lineTo(810.8, 404.5);
      ctx.lineTo(809.4, 411.5);
      ctx.lineTo(802.7, 409.2);
      ctx.lineTo(808.0, 414.0);
      ctx.lineTo(802.7, 418.7);
      ctx.lineTo(809.4, 416.4);
      ctx.lineTo(810.8, 423.4);
      ctx.lineTo(812.3, 416.4);
      ctx.lineTo(819.0, 418.7);
      ctx.lineTo(813.7, 414.0);
      ctx.lineTo(819.0, 409.2);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(699.9, 275.4);
      ctx.lineTo(693.1, 277.7);
      ctx.lineTo(691.7, 270.7);
      ctx.lineTo(690.3, 277.7);
      ctx.lineTo(683.5, 275.4);
      ctx.lineTo(688.9, 280.1);
      ctx.lineTo(683.5, 284.8);
      ctx.lineTo(690.3, 282.6);
      ctx.lineTo(691.7, 289.6);
      ctx.lineTo(693.1, 282.6);
      ctx.lineTo(699.9, 284.8);
      ctx.lineTo(694.6, 280.1);
      ctx.lineTo(699.9, 275.4);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(691.9, 498.6);
      ctx.lineTo(685.1, 500.9);
      ctx.lineTo(683.7, 493.9);
      ctx.lineTo(682.3, 500.9);
      ctx.lineTo(675.5, 498.6);
      ctx.lineTo(680.9, 503.4);
      ctx.lineTo(675.5, 508.1);
      ctx.lineTo(682.3, 505.8);
      ctx.lineTo(683.7, 512.8);
      ctx.lineTo(685.1, 505.8);
      ctx.lineTo(691.9, 508.1);
      ctx.lineTo(686.6, 503.4);
      ctx.lineTo(691.9, 498.6);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(622.2, 196.3);
      ctx.lineTo(615.4, 198.5);
      ctx.lineTo(614.0, 191.5);
      ctx.lineTo(612.6, 198.5);
      ctx.lineTo(605.8, 196.3);
      ctx.lineTo(611.2, 201.0);
      ctx.lineTo(605.8, 205.7);
      ctx.lineTo(612.6, 203.4);
      ctx.lineTo(614.0, 210.4);
      ctx.lineTo(615.4, 203.4);
      ctx.lineTo(622.2, 205.7);
      ctx.lineTo(616.8, 201.0);
      ctx.lineTo(622.2, 196.3);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(577.9, 128.1);
      ctx.lineTo(571.1, 130.4);
      ctx.lineTo(569.7, 123.4);
      ctx.lineTo(568.3, 130.4);
      ctx.lineTo(561.5, 128.1);
      ctx.lineTo(566.8, 132.9);
      ctx.lineTo(561.5, 137.6);
      ctx.lineTo(568.3, 135.3);
      ctx.lineTo(569.7, 142.3);
      ctx.lineTo(571.1, 135.3);
      ctx.lineTo(577.9, 137.6);
      ctx.lineTo(572.5, 132.9);
      ctx.lineTo(577.9, 128.1);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(642.6, 64.8);
      ctx.lineTo(635.9, 67.1);
      ctx.lineTo(634.5, 60.1);
      ctx.lineTo(633.1, 67.1);
      ctx.lineTo(626.3, 64.8);
      ctx.lineTo(631.6, 69.5);
      ctx.lineTo(626.3, 74.2);
      ctx.lineTo(633.1, 72.0);
      ctx.lineTo(634.5, 78.9);
      ctx.lineTo(635.9, 72.0);
      ctx.lineTo(642.6, 74.2);
      ctx.lineTo(637.3, 69.5);
      ctx.lineTo(642.6, 64.8);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(429.9, 114.5);
      ctx.lineTo(423.1, 116.8);
      ctx.lineTo(421.7, 109.8);
      ctx.lineTo(420.3, 116.8);
      ctx.lineTo(413.5, 114.5);
      ctx.lineTo(418.9, 119.2);
      ctx.lineTo(413.5, 123.9);
      ctx.lineTo(420.3, 121.7);
      ctx.lineTo(421.7, 128.6);
      ctx.lineTo(423.1, 121.7);
      ctx.lineTo(429.9, 123.9);
      ctx.lineTo(424.5, 119.2);
      ctx.lineTo(429.9, 114.5);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(263.3, 322.3);
      ctx.lineTo(256.6, 324.5);
      ctx.lineTo(255.2, 317.5);
      ctx.lineTo(253.8, 324.5);
      ctx.lineTo(247.0, 322.3);
      ctx.lineTo(252.3, 327.0);
      ctx.lineTo(247.0, 331.7);
      ctx.lineTo(253.8, 329.4);
      ctx.lineTo(255.2, 336.4);
      ctx.lineTo(256.6, 329.4);
      ctx.lineTo(263.3, 331.7);
      ctx.lineTo(258.0, 327.0);
      ctx.lineTo(263.3, 322.3);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(179.8, 280.3);
      ctx.lineTo(173.0, 282.6);
      ctx.lineTo(171.6, 275.6);
      ctx.lineTo(170.2, 282.6);
      ctx.lineTo(163.4, 280.3);
      ctx.lineTo(168.7, 285.1);
      ctx.lineTo(163.4, 289.8);
      ctx.lineTo(170.2, 287.5);
      ctx.lineTo(171.6, 294.5);
      ctx.lineTo(173.0, 287.5);
      ctx.lineTo(179.8, 289.8);
      ctx.lineTo(174.4, 285.1);
      ctx.lineTo(179.8, 280.3);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(230.0, 233.8);
      ctx.lineTo(223.2, 236.0);
      ctx.lineTo(221.8, 229.0);
      ctx.lineTo(220.4, 236.0);
      ctx.lineTo(213.7, 233.8);
      ctx.lineTo(219.0, 238.5);
      ctx.lineTo(213.7, 243.2);
      ctx.lineTo(220.4, 240.9);
      ctx.lineTo(221.8, 247.9);
      ctx.lineTo(223.2, 240.9);
      ctx.lineTo(230.0, 243.2);
      ctx.lineTo(224.7, 238.5);
      ctx.lineTo(230.0, 233.8);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(565.8, 415.0);
      ctx.lineTo(559.1, 417.2);
      ctx.lineTo(557.6, 410.3);
      ctx.lineTo(556.2, 417.2);
      ctx.lineTo(549.5, 415.0);
      ctx.lineTo(554.8, 419.7);
      ctx.lineTo(549.5, 424.4);
      ctx.lineTo(556.2, 422.2);
      ctx.lineTo(557.6, 429.1);
      ctx.lineTo(559.1, 422.2);
      ctx.lineTo(565.8, 424.4);
      ctx.lineTo(560.5, 419.7);
      ctx.lineTo(565.8, 415.0);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(875.3, 827.2);
      ctx.lineTo(868.6, 829.5);
      ctx.lineTo(867.2, 822.5);
      ctx.lineTo(865.8, 829.5);
      ctx.lineTo(859.0, 827.2);
      ctx.lineTo(864.3, 831.9);
      ctx.lineTo(859.0, 836.7);
      ctx.lineTo(865.8, 834.4);
      ctx.lineTo(867.2, 841.4);
      ctx.lineTo(868.6, 834.4);
      ctx.lineTo(875.3, 836.7);
      ctx.lineTo(870.0, 831.9);
      ctx.lineTo(875.3, 827.2);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(905.2, 758.0);
      ctx.lineTo(898.5, 760.2);
      ctx.lineTo(897.0, 753.2);
      ctx.lineTo(895.6, 760.2);
      ctx.lineTo(888.9, 758.0);
      ctx.lineTo(894.2, 762.7);
      ctx.lineTo(888.9, 767.4);
      ctx.lineTo(895.6, 765.1);
      ctx.lineTo(897.0, 772.1);
      ctx.lineTo(898.5, 765.1);
      ctx.lineTo(905.2, 767.4);
      ctx.lineTo(899.9, 762.7);
      ctx.lineTo(905.2, 758.0);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(903.0, 653.4);
      ctx.lineTo(896.2, 655.6);
      ctx.lineTo(894.8, 648.6);
      ctx.lineTo(893.4, 655.6);
      ctx.lineTo(886.6, 653.4);
      ctx.lineTo(892.0, 658.1);
      ctx.lineTo(886.6, 662.8);
      ctx.lineTo(893.4, 660.5);
      ctx.lineTo(894.8, 667.5);
      ctx.lineTo(896.2, 660.5);
      ctx.lineTo(903.0, 662.8);
      ctx.lineTo(897.6, 658.1);
      ctx.lineTo(903.0, 653.4);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(839.7, 724.2);
      ctx.lineTo(832.9, 726.4);
      ctx.lineTo(831.5, 719.5);
      ctx.lineTo(830.1, 726.4);
      ctx.lineTo(823.3, 724.2);
      ctx.lineTo(828.7, 728.9);
      ctx.lineTo(823.3, 733.6);
      ctx.lineTo(830.1, 731.4);
      ctx.lineTo(831.5, 738.3);
      ctx.lineTo(832.9, 731.4);
      ctx.lineTo(839.7, 733.6);
      ctx.lineTo(834.3, 728.9);
      ctx.lineTo(839.7, 724.2);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(448.1, 535.1);
      ctx.bezierCurveTo(448.1, 538.2, 444.9, 539.5, 444.9, 539.5);
      ctx.bezierCurveTo(444.9, 539.5, 448.1, 540.8, 448.1, 543.8);
      ctx.bezierCurveTo(448.1, 540.8, 451.3, 539.5, 451.3, 539.5);
      ctx.bezierCurveTo(451.3, 539.5, 448.1, 538.2, 448.1, 535.1);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(133.3, 380.1);
      ctx.bezierCurveTo(133.3, 383.1, 130.1, 384.4, 130.1, 384.4);
      ctx.bezierCurveTo(130.1, 384.4, 133.3, 385.8, 133.3, 388.8);
      ctx.bezierCurveTo(133.3, 385.8, 136.5, 384.4, 136.5, 384.4);
      ctx.bezierCurveTo(136.5, 384.4, 133.3, 383.1, 133.3, 380.1);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(91.7, 407.1);
      ctx.bezierCurveTo(91.7, 410.1, 88.5, 411.4, 88.5, 411.4);
      ctx.bezierCurveTo(88.5, 411.4, 91.7, 412.8, 91.7, 415.8);
      ctx.bezierCurveTo(91.7, 412.8, 94.9, 411.4, 94.9, 411.4);
      ctx.bezierCurveTo(94.9, 411.4, 91.7, 410.1, 91.7, 407.1);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(130.1, 558.8);
      ctx.bezierCurveTo(130.1, 561.8, 126.9, 563.2, 126.9, 563.2);
      ctx.bezierCurveTo(126.9, 563.2, 130.1, 564.5, 130.1, 567.5);
      ctx.bezierCurveTo(130.1, 564.5, 133.3, 563.2, 133.3, 563.2);
      ctx.bezierCurveTo(133.3, 563.2, 130.1, 561.8, 130.1, 558.8);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(136.5, 632.4);
      ctx.bezierCurveTo(136.5, 635.4, 133.3, 636.7, 133.3, 636.7);
      ctx.bezierCurveTo(133.3, 636.7, 136.5, 638.1, 136.5, 641.1);
      ctx.bezierCurveTo(136.5, 638.1, 139.7, 636.7, 139.7, 636.7);
      ctx.bezierCurveTo(139.7, 636.7, 136.5, 635.4, 136.5, 632.4);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(219.9, 487.6);
      ctx.bezierCurveTo(219.9, 490.6, 216.7, 492.0, 216.7, 492.0);
      ctx.bezierCurveTo(216.7, 492.0, 219.9, 493.3, 219.9, 496.3);
      ctx.bezierCurveTo(219.9, 493.3, 223.1, 492.0, 223.1, 492.0);
      ctx.bezierCurveTo(223.1, 492.0, 219.9, 490.6, 219.9, 487.6);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(240.9, 508.6);
      ctx.bezierCurveTo(240.9, 511.7, 237.7, 513.0, 237.7, 513.0);
      ctx.bezierCurveTo(237.7, 513.0, 240.9, 514.3, 240.9, 517.3);
      ctx.bezierCurveTo(240.9, 514.3, 244.1, 513.0, 244.1, 513.0);
      ctx.bezierCurveTo(244.1, 513.0, 240.9, 511.7, 240.9, 508.6);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(271.0, 583.5);
      ctx.bezierCurveTo(271.0, 586.5, 267.8, 587.8, 267.8, 587.8);
      ctx.bezierCurveTo(267.8, 587.8, 271.0, 589.1, 271.0, 592.2);
      ctx.bezierCurveTo(271.0, 589.1, 274.2, 587.8, 274.2, 587.8);
      ctx.bezierCurveTo(274.2, 587.8, 271.0, 586.5, 271.0, 583.5);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(249.6, 768.1);
      ctx.bezierCurveTo(249.6, 771.1, 246.4, 772.4, 246.4, 772.4);
      ctx.bezierCurveTo(246.4, 772.4, 249.6, 773.8, 249.6, 776.8);
      ctx.bezierCurveTo(249.6, 773.8, 252.8, 772.4, 252.8, 772.4);
      ctx.bezierCurveTo(252.8, 772.4, 249.6, 771.1, 249.6, 768.1);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(429.7, 803.1);
      ctx.bezierCurveTo(429.7, 806.1, 426.5, 807.5, 426.5, 807.5);
      ctx.bezierCurveTo(426.5, 807.5, 429.7, 808.8, 429.7, 811.8);
      ctx.bezierCurveTo(429.7, 808.8, 432.9, 807.5, 432.9, 807.5);
      ctx.bezierCurveTo(432.9, 807.5, 429.7, 806.1, 429.7, 803.1);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(652.5, 818.9);
      ctx.bezierCurveTo(652.5, 821.9, 649.3, 823.2, 649.3, 823.2);
      ctx.bezierCurveTo(649.3, 823.2, 652.5, 824.6, 652.5, 827.6);
      ctx.bezierCurveTo(652.5, 824.6, 655.7, 823.2, 655.7, 823.2);
      ctx.bezierCurveTo(655.7, 823.2, 652.5, 821.9, 652.5, 818.9);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(865.9, 666.0);
      ctx.bezierCurveTo(865.9, 669.0, 862.7, 670.3, 862.7, 670.3);
      ctx.bezierCurveTo(862.7, 670.3, 865.9, 671.7, 865.9, 674.7);
      ctx.bezierCurveTo(865.9, 671.7, 869.1, 670.3, 869.1, 670.3);
      ctx.bezierCurveTo(869.1, 670.3, 865.9, 669.0, 865.9, 666.0);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(929.9, 740.2);
      ctx.bezierCurveTo(929.9, 743.2, 926.7, 744.5, 926.7, 744.5);
      ctx.bezierCurveTo(926.7, 744.5, 929.9, 745.8, 929.9, 748.9);
      ctx.bezierCurveTo(929.9, 745.8, 933.1, 744.5, 933.1, 744.5);
      ctx.bezierCurveTo(933.1, 744.5, 929.9, 743.2, 929.9, 740.2);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(903.0, 410.9);
      ctx.bezierCurveTo(903.0, 413.9, 899.8, 415.2, 899.8, 415.2);
      ctx.bezierCurveTo(899.8, 415.2, 903.0, 416.6, 903.0, 419.6);
      ctx.bezierCurveTo(903.0, 416.6, 906.2, 415.2, 906.2, 415.2);
      ctx.bezierCurveTo(906.2, 415.2, 903.0, 413.9, 903.0, 410.9);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(773.8, 330.7);
      ctx.bezierCurveTo(773.8, 333.8, 770.6, 335.1, 770.6, 335.1);
      ctx.bezierCurveTo(770.6, 335.1, 773.8, 336.4, 773.8, 339.4);
      ctx.bezierCurveTo(773.8, 336.4, 777.0, 335.1, 777.0, 335.1);
      ctx.bezierCurveTo(777.0, 335.1, 773.8, 333.8, 773.8, 330.7);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(753.8, 249.4);
      ctx.bezierCurveTo(753.8, 252.4, 750.6, 253.7, 750.6, 253.7);
      ctx.bezierCurveTo(750.6, 253.7, 753.8, 255.0, 753.8, 258.1);
      ctx.bezierCurveTo(753.8, 255.0, 757.0, 253.7, 757.0, 253.7);
      ctx.bezierCurveTo(757.0, 253.7, 753.8, 252.4, 753.8, 249.4);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(686.9, 327.1);
      ctx.bezierCurveTo(686.9, 330.1, 683.7, 331.4, 683.7, 331.4);
      ctx.bezierCurveTo(683.7, 331.4, 686.9, 332.8, 686.9, 335.8);
      ctx.bezierCurveTo(686.9, 332.8, 690.1, 331.4, 690.1, 331.4);
      ctx.bezierCurveTo(690.1, 331.4, 686.9, 330.1, 686.9, 327.1);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(787.8, 555.4);
      ctx.bezierCurveTo(787.8, 558.4, 784.6, 559.7, 784.6, 559.7);
      ctx.bezierCurveTo(784.6, 559.7, 787.8, 561.0, 787.8, 564.1);
      ctx.bezierCurveTo(787.8, 561.0, 791.0, 559.7, 791.0, 559.7);
      ctx.bezierCurveTo(791.0, 559.7, 787.8, 558.4, 787.8, 555.4);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(725.3, 576.0);
      ctx.bezierCurveTo(725.3, 579.0, 722.1, 580.3, 722.1, 580.3);
      ctx.bezierCurveTo(722.1, 580.3, 725.3, 581.7, 725.3, 584.7);
      ctx.bezierCurveTo(725.3, 581.7, 728.5, 580.3, 728.5, 580.3);
      ctx.bezierCurveTo(728.5, 580.3, 725.3, 579.0, 725.3, 576.0);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(646.0, 569.9);
      ctx.bezierCurveTo(646.0, 573.0, 642.8, 574.3, 642.8, 574.3);
      ctx.bezierCurveTo(642.8, 574.3, 646.0, 575.6, 646.0, 578.7);
      ctx.bezierCurveTo(646.0, 575.6, 649.2, 574.3, 649.2, 574.3);
      ctx.bezierCurveTo(649.2, 574.3, 646.0, 573.0, 646.0, 569.9);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(696.0, 398.9);
      ctx.bezierCurveTo(696.0, 402.0, 692.8, 403.3, 692.8, 403.3);
      ctx.bezierCurveTo(692.8, 403.3, 696.0, 404.6, 696.0, 407.6);
      ctx.bezierCurveTo(696.0, 404.6, 699.2, 403.3, 699.2, 403.3);
      ctx.bezierCurveTo(699.2, 403.3, 696.0, 402.0, 696.0, 398.9);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(473.9, 297.9);
      ctx.bezierCurveTo(473.9, 301.0, 470.7, 302.3, 470.7, 302.3);
      ctx.bezierCurveTo(470.7, 302.3, 473.9, 303.6, 473.9, 306.6);
      ctx.bezierCurveTo(473.9, 303.6, 477.1, 302.3, 477.1, 302.3);
      ctx.bezierCurveTo(477.1, 302.3, 473.9, 301.0, 473.9, 297.9);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(462.5, 341.0);
      ctx.bezierCurveTo(462.5, 344.1, 459.3, 345.4, 459.3, 345.4);
      ctx.bezierCurveTo(459.3, 345.4, 462.5, 346.7, 462.5, 349.7);
      ctx.bezierCurveTo(462.5, 346.7, 465.7, 345.4, 465.7, 345.4);
      ctx.bezierCurveTo(465.7, 345.4, 462.5, 344.1, 462.5, 341.0);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(513.6, 596.9);
      ctx.bezierCurveTo(513.6, 599.9, 510.4, 601.3, 510.4, 601.3);
      ctx.bezierCurveTo(510.4, 601.3, 513.6, 602.6, 513.6, 605.6);
      ctx.bezierCurveTo(513.6, 602.6, 516.8, 601.3, 516.8, 601.3);
      ctx.bezierCurveTo(516.8, 601.3, 513.6, 599.9, 513.6, 596.9);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(552.2, 577.6);
      ctx.bezierCurveTo(552.2, 580.6, 549.0, 582.0, 549.0, 582.0);
      ctx.bezierCurveTo(549.0, 582.0, 552.2, 583.3, 552.2, 586.3);
      ctx.bezierCurveTo(552.2, 583.3, 555.4, 582.0, 555.4, 582.0);
      ctx.bezierCurveTo(555.4, 582.0, 552.2, 580.6, 552.2, 577.6);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(649.2, 656.1);
      ctx.bezierCurveTo(649.2, 659.1, 646.0, 660.4, 646.0, 660.4);
      ctx.bezierCurveTo(646.0, 660.4, 649.2, 661.7, 649.2, 664.8);
      ctx.bezierCurveTo(649.2, 661.7, 652.4, 660.4, 652.4, 660.4);
      ctx.bezierCurveTo(652.4, 660.4, 649.2, 659.1, 649.2, 656.1);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(657.9, 634.0);
      ctx.bezierCurveTo(657.9, 637.0, 654.7, 638.4, 654.7, 638.4);
      ctx.bezierCurveTo(654.7, 638.4, 657.9, 639.7, 657.9, 642.7);
      ctx.bezierCurveTo(657.9, 639.7, 661.1, 638.4, 661.1, 638.4);
      ctx.bezierCurveTo(661.1, 638.4, 657.9, 637.0, 657.9, 634.0);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(580.5, 685.7);
      ctx.bezierCurveTo(580.5, 688.7, 577.3, 690.1, 577.3, 690.1);
      ctx.bezierCurveTo(577.3, 690.1, 580.5, 691.4, 580.5, 694.4);
      ctx.bezierCurveTo(580.5, 691.4, 583.7, 690.1, 583.7, 690.1);
      ctx.bezierCurveTo(583.7, 690.1, 580.5, 688.7, 580.5, 685.7);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(433.0, 603.7);
      ctx.bezierCurveTo(433.0, 606.7, 429.8, 608.1, 429.8, 608.1);
      ctx.bezierCurveTo(429.8, 608.1, 433.0, 609.4, 433.0, 612.4);
      ctx.bezierCurveTo(433.0, 609.4, 436.2, 608.1, 436.2, 608.1);
      ctx.bezierCurveTo(436.2, 608.1, 433.0, 606.7, 433.0, 603.7);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(384.9, 595.0);
      ctx.bezierCurveTo(384.9, 598.0, 381.7, 599.4, 381.7, 599.4);
      ctx.bezierCurveTo(381.7, 599.4, 384.9, 600.7, 384.9, 603.7);
      ctx.bezierCurveTo(384.9, 600.7, 388.1, 599.4, 388.1, 599.4);
      ctx.bezierCurveTo(388.1, 599.4, 384.9, 598.0, 384.9, 595.0);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(352.4, 573.2);
      ctx.bezierCurveTo(352.4, 576.3, 349.2, 577.6, 349.2, 577.6);
      ctx.bezierCurveTo(349.2, 577.6, 352.4, 578.9, 352.4, 582.0);
      ctx.bezierCurveTo(352.4, 578.9, 355.6, 577.6, 355.6, 577.6);
      ctx.bezierCurveTo(355.6, 577.6, 352.4, 576.3, 352.4, 573.2);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(228.2, 618.6);
      ctx.bezierCurveTo(228.2, 621.6, 225.0, 623.0, 225.0, 623.0);
      ctx.bezierCurveTo(225.0, 623.0, 228.2, 624.3, 228.2, 627.3);
      ctx.bezierCurveTo(228.2, 624.3, 231.3, 623.0, 231.3, 623.0);
      ctx.bezierCurveTo(231.3, 623.0, 228.2, 621.6, 228.2, 618.6);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(271.0, 690.5);
      ctx.bezierCurveTo(271.0, 693.5, 267.8, 694.9, 267.8, 694.9);
      ctx.bezierCurveTo(267.8, 694.9, 271.0, 696.2, 271.0, 699.2);
      ctx.bezierCurveTo(271.0, 696.2, 274.2, 694.9, 274.2, 694.9);
      ctx.bezierCurveTo(274.2, 694.9, 271.0, 693.5, 271.0, 690.5);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(144.6, 763.5);
      ctx.bezierCurveTo(144.6, 766.5, 141.4, 767.8, 141.4, 767.8);
      ctx.bezierCurveTo(141.4, 767.8, 144.6, 769.2, 144.6, 772.2);
      ctx.bezierCurveTo(144.6, 769.2, 147.8, 767.8, 147.8, 767.8);
      ctx.bezierCurveTo(147.8, 767.8, 144.6, 766.5, 144.6, 763.5);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(239.1, 863.6);
      ctx.bezierCurveTo(239.1, 866.6, 235.9, 868.0, 235.9, 868.0);
      ctx.bezierCurveTo(235.9, 868.0, 239.1, 869.3, 239.1, 872.3);
      ctx.bezierCurveTo(239.1, 869.3, 242.3, 868.0, 242.3, 868.0);
      ctx.bezierCurveTo(242.3, 868.0, 239.1, 866.6, 239.1, 863.6);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(337.4, 961.1);
      ctx.bezierCurveTo(337.4, 964.2, 334.2, 965.5, 334.2, 965.5);
      ctx.bezierCurveTo(334.2, 965.5, 337.4, 966.8, 337.4, 969.8);
      ctx.bezierCurveTo(337.4, 966.8, 340.6, 965.5, 340.6, 965.5);
      ctx.bezierCurveTo(340.6, 965.5, 337.4, 964.2, 337.4, 961.1);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(434.7, 956.6);
      ctx.bezierCurveTo(434.7, 959.7, 431.5, 961.0, 431.5, 961.0);
      ctx.bezierCurveTo(431.5, 961.0, 434.7, 962.3, 434.7, 965.3);
      ctx.bezierCurveTo(434.7, 962.3, 437.9, 961.0, 437.9, 961.0);
      ctx.bezierCurveTo(437.9, 961.0, 434.7, 959.7, 434.7, 956.6);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(504.3, 948.4);
      ctx.bezierCurveTo(504.3, 951.4, 501.1, 952.7, 501.1, 952.7);
      ctx.bezierCurveTo(501.1, 952.7, 504.3, 954.0, 504.3, 957.1);
      ctx.bezierCurveTo(504.3, 954.0, 507.5, 952.7, 507.5, 952.7);
      ctx.bezierCurveTo(507.5, 952.7, 504.3, 951.4, 504.3, 948.4);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(707.2, 933.2);
      ctx.bezierCurveTo(707.2, 936.2, 704.0, 937.5, 704.0, 937.5);
      ctx.bezierCurveTo(704.0, 937.5, 707.2, 938.9, 707.2, 941.9);
      ctx.bezierCurveTo(707.2, 938.9, 710.4, 937.5, 710.4, 937.5);
      ctx.bezierCurveTo(710.4, 937.5, 707.2, 936.2, 707.2, 933.2);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(799.5, 859.1);
      ctx.bezierCurveTo(799.5, 862.1, 796.3, 863.5, 796.3, 863.5);
      ctx.bezierCurveTo(796.3, 863.5, 799.5, 864.8, 799.5, 867.8);
      ctx.bezierCurveTo(799.5, 864.8, 802.7, 863.5, 802.7, 863.5);
      ctx.bezierCurveTo(802.7, 863.5, 799.5, 862.1, 799.5, 859.1);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(820.8, 833.2);
      ctx.bezierCurveTo(820.8, 836.3, 817.6, 837.6, 817.6, 837.6);
      ctx.bezierCurveTo(817.6, 837.6, 820.8, 838.9, 820.8, 841.9);
      ctx.bezierCurveTo(820.8, 838.9, 824.0, 837.6, 824.0, 837.6);
      ctx.bezierCurveTo(824.0, 837.6, 820.8, 836.3, 820.8, 833.2);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(784.4, 792.7);
      ctx.bezierCurveTo(784.4, 795.8, 781.2, 797.1, 781.2, 797.1);
      ctx.bezierCurveTo(781.2, 797.1, 784.4, 798.4, 784.4, 801.4);
      ctx.bezierCurveTo(784.4, 798.4, 787.6, 797.1, 787.6, 797.1);
      ctx.bezierCurveTo(787.6, 797.1, 784.4, 795.8, 784.4, 792.7);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(297.3, 845.5);
      ctx.bezierCurveTo(297.3, 848.5, 294.1, 849.9, 294.1, 849.9);
      ctx.bezierCurveTo(294.1, 849.9, 297.3, 851.2, 297.3, 854.2);
      ctx.bezierCurveTo(297.3, 851.2, 300.5, 849.9, 300.5, 849.9);
      ctx.bezierCurveTo(300.5, 849.9, 297.3, 848.5, 297.3, 845.5);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(391.8, 98.9);
      ctx.bezierCurveTo(391.8, 102.0, 388.6, 103.3, 388.6, 103.3);
      ctx.bezierCurveTo(388.6, 103.3, 391.8, 104.6, 391.8, 107.6);
      ctx.bezierCurveTo(391.8, 104.6, 395.0, 103.3, 395.0, 103.3);
      ctx.bezierCurveTo(395.0, 103.3, 391.8, 102.0, 391.8, 98.9);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(649.3, 151.5);
      ctx.bezierCurveTo(649.3, 154.5, 646.1, 155.9, 646.1, 155.9);
      ctx.bezierCurveTo(646.1, 155.9, 649.3, 157.2, 649.3, 160.2);
      ctx.bezierCurveTo(649.3, 157.2, 652.5, 155.9, 652.5, 155.9);
      ctx.bezierCurveTo(652.5, 155.9, 649.3, 154.5, 649.3, 151.5);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(316.9, 244.4);
      ctx.bezierCurveTo(316.9, 247.4, 313.7, 248.8, 313.7, 248.8);
      ctx.bezierCurveTo(313.7, 248.8, 316.9, 250.1, 316.9, 253.1);
      ctx.bezierCurveTo(316.9, 250.1, 320.1, 248.8, 320.1, 248.8);
      ctx.bezierCurveTo(320.1, 248.8, 316.9, 247.4, 316.9, 244.4);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(260.3, 275.8);
      ctx.bezierCurveTo(260.3, 278.8, 257.1, 280.1, 257.1, 280.1);
      ctx.bezierCurveTo(257.1, 280.1, 260.3, 281.4, 260.3, 284.5);
      ctx.bezierCurveTo(260.3, 281.4, 263.5, 280.1, 263.5, 280.1);
      ctx.bezierCurveTo(263.5, 280.1, 260.3, 278.8, 260.3, 275.8);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(274.4, 313.2);
      ctx.bezierCurveTo(274.4, 316.2, 271.2, 317.5, 271.2, 317.5);
      ctx.bezierCurveTo(271.2, 317.5, 274.4, 318.9, 274.4, 321.9);
      ctx.bezierCurveTo(274.4, 318.9, 277.6, 317.5, 277.6, 317.5);
      ctx.bezierCurveTo(277.6, 317.5, 274.4, 316.2, 274.4, 313.2);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(316.6, 376.2);
      ctx.bezierCurveTo(316.6, 379.2, 313.4, 380.6, 313.4, 380.6);
      ctx.bezierCurveTo(313.4, 380.6, 316.6, 381.9, 316.6, 384.9);
      ctx.bezierCurveTo(316.6, 381.9, 319.8, 380.6, 319.8, 380.6);
      ctx.bezierCurveTo(319.8, 380.6, 316.6, 379.2, 316.6, 376.2);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(438.2, 319.5);
      ctx.bezierCurveTo(438.2, 322.5, 435.0, 323.8, 435.0, 323.8);
      ctx.bezierCurveTo(435.0, 323.8, 438.2, 325.1, 438.2, 328.2);
      ctx.bezierCurveTo(438.2, 325.1, 441.4, 323.8, 441.4, 323.8);
      ctx.bezierCurveTo(441.4, 323.8, 438.2, 322.5, 438.2, 319.5);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(216.7, 803.1);
      ctx.bezierCurveTo(216.7, 806.1, 213.5, 807.5, 213.5, 807.5);
      ctx.bezierCurveTo(213.5, 807.5, 216.7, 808.8, 216.7, 811.8);
      ctx.bezierCurveTo(216.7, 808.8, 219.9, 807.5, 219.9, 807.5);
      ctx.bezierCurveTo(219.9, 807.5, 216.7, 806.1, 216.7, 803.1);
      ctx.closePath();
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1024.7, 529.1);
      ctx.lineTo(1040.0, 529.0);
      ctx.lineCap = "butt";
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1024.8, 524.5);
      ctx.lineTo(1040.1, 524.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1024.5, 520.5);
      ctx.lineTo(1039.8, 520.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1024.6, 515.9);
      ctx.lineTo(1039.8, 515.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1024.3, 512.0);
      ctx.lineTo(1039.6, 511.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1024.4, 507.4);
      ctx.lineTo(1039.6, 506.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1024.0, 503.5);
      ctx.lineTo(1039.2, 502.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1023.8, 498.9);
      ctx.lineTo(1039.0, 497.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1023.3, 495.0);
      ctx.lineTo(1038.5, 493.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1023.1, 490.3);
      ctx.lineTo(1038.3, 489.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1022.7, 486.5);
      ctx.lineTo(1037.9, 485.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1022.5, 481.8);
      ctx.lineTo(1037.7, 480.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1021.8, 478.0);
      ctx.lineTo(1037.0, 476.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1021.4, 473.4);
      ctx.lineTo(1036.6, 471.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1020.8, 469.5);
      ctx.lineTo(1035.9, 467.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1020.4, 464.9);
      ctx.lineTo(1035.5, 462.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1019.7, 461.0);
      ctx.lineTo(1034.8, 458.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1019.3, 456.4);
      ctx.lineTo(1034.4, 454.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1018.4, 452.6);
      ctx.lineTo(1033.5, 450.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1017.8, 448.0);
      ctx.lineTo(1032.8, 445.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1016.9, 444.2);
      ctx.lineTo(1031.9, 441.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1016.3, 439.6);
      ctx.lineTo(1031.3, 436.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1015.4, 435.8);
      ctx.lineTo(1030.4, 432.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1014.7, 431.2);
      ctx.lineTo(1029.7, 428.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1013.7, 427.4);
      ctx.lineTo(1028.6, 424.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1012.8, 422.9);
      ctx.lineTo(1027.7, 419.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1011.7, 419.1);
      ctx.lineTo(1026.6, 415.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1010.9, 414.6);
      ctx.lineTo(1025.7, 411.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1009.8, 410.8);
      ctx.lineTo(1024.6, 407.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1008.8, 406.3);
      ctx.lineTo(1023.6, 402.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1007.6, 402.6);
      ctx.lineTo(1022.3, 398.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1006.5, 398.1);
      ctx.lineTo(1021.2, 393.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1005.3, 394.4);
      ctx.lineTo(1019.9, 390.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1004.2, 389.9);
      ctx.lineTo(1018.8, 385.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1002.9, 386.1);
      ctx.lineTo(1017.5, 381.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1001.7, 381.7);
      ctx.lineTo(1016.2, 377.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1000.3, 378.0);
      ctx.lineTo(1014.8, 373.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(998.9, 373.6);
      ctx.lineTo(1013.4, 368.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(997.5, 370.0);
      ctx.lineTo(1011.9, 364.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(996.2, 365.5);
      ctx.lineTo(1010.6, 360.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(994.8, 361.9);
      ctx.lineTo(1009.1, 356.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(993.2, 357.5);
      ctx.lineTo(1007.5, 352.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(991.6, 353.9);
      ctx.lineTo(1005.9, 348.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(990.1, 349.6);
      ctx.lineTo(1004.3, 343.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(988.5, 346.0);
      ctx.lineTo(1002.7, 340.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(987.0, 341.6);
      ctx.lineTo(1001.1, 335.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(985.3, 338.1);
      ctx.lineTo(999.3, 332.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(983.5, 333.8);
      ctx.lineTo(997.5, 327.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(981.8, 330.3);
      ctx.lineTo(995.7, 324.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(980.0, 326.0);
      ctx.lineTo(993.9, 319.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(978.3, 322.5);
      ctx.lineTo(992.1, 316.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(976.5, 318.2);
      ctx.lineTo(990.3, 311.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(974.6, 314.8);
      ctx.lineTo(988.3, 308.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(972.6, 310.6);
      ctx.lineTo(986.3, 303.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(970.7, 307.2);
      ctx.lineTo(984.3, 300.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(968.7, 303.0);
      ctx.lineTo(982.3, 296.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(966.8, 299.6);
      ctx.lineTo(980.3, 292.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(964.8, 295.5);
      ctx.lineTo(978.2, 288.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(962.7, 292.2);
      ctx.lineTo(976.0, 284.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(960.5, 288.1);
      ctx.lineTo(973.8, 280.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(958.4, 284.8);
      ctx.lineTo(971.6, 277.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(956.3, 280.7);
      ctx.lineTo(969.4, 272.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(954.2, 277.4);
      ctx.lineTo(967.3, 269.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(951.9, 273.3);
      ctx.lineTo(964.9, 265.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(949.6, 270.1);
      ctx.lineTo(962.6, 262.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(947.3, 266.2);
      ctx.lineTo(960.1, 257.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(945.0, 263.0);
      ctx.lineTo(957.8, 254.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(942.7, 259.0);
      ctx.lineTo(955.4, 250.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(940.4, 255.8);
      ctx.lineTo(953.1, 247.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(937.9, 251.9);
      ctx.lineTo(950.4, 243.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(935.5, 248.8);
      ctx.lineTo(948.0, 240.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(932.9, 245.0);
      ctx.lineTo(945.3, 236.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(930.5, 241.9);
      ctx.lineTo(942.9, 232.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(928.0, 238.0);
      ctx.lineTo(940.2, 228.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(925.5, 235.0);
      ctx.lineTo(937.7, 225.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(922.8, 231.2);
      ctx.lineTo(934.9, 221.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(920.2, 228.3);
      ctx.lineTo(932.2, 218.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(917.5, 224.5);
      ctx.lineTo(929.4, 215.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(914.9, 221.5);
      ctx.lineTo(926.8, 211.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(912.2, 217.8);
      ctx.lineTo(924.0, 208.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(909.5, 215.0);
      ctx.lineTo(921.2, 205.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(906.6, 211.4);
      ctx.lineTo(918.2, 201.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(903.9, 208.5);
      ctx.lineTo(915.4, 198.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(901.0, 204.9);
      ctx.lineTo(912.5, 194.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(898.3, 202.1);
      ctx.lineTo(909.7, 191.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(895.4, 198.5);
      ctx.lineTo(906.6, 188.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(892.5, 195.8);
      ctx.lineTo(903.7, 185.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(889.5, 192.3);
      ctx.lineTo(900.5, 181.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(886.6, 189.6);
      ctx.lineTo(897.6, 179.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(883.6, 186.2);
      ctx.lineTo(894.5, 175.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(880.7, 183.4);
      ctx.lineTo(891.6, 172.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(877.5, 180.1);
      ctx.lineTo(888.2, 169.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(874.6, 177.5);
      ctx.lineTo(885.2, 166.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(871.4, 174.2);
      ctx.lineTo(881.9, 163.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(868.4, 171.6);
      ctx.lineTo(878.8, 160.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(865.2, 168.3);
      ctx.lineTo(875.5, 157.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(862.2, 165.8);
      ctx.lineTo(872.4, 154.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(858.8, 162.6);
      ctx.lineTo(868.9, 151.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(855.7, 160.2);
      ctx.lineTo(865.8, 148.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(852.3, 157.1);
      ctx.lineTo(862.3, 145.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(849.3, 154.6);
      ctx.lineTo(859.1, 142.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(845.9, 151.5);
      ctx.lineTo(855.6, 139.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(842.7, 149.2);
      ctx.lineTo(852.4, 137.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(839.2, 146.2);
      ctx.lineTo(848.7, 134.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(836.0, 143.9);
      ctx.lineTo(845.4, 131.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(832.5, 140.9);
      ctx.lineTo(841.8, 128.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(829.3, 138.6);
      ctx.lineTo(838.5, 126.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(825.7, 135.7);
      ctx.lineTo(834.8, 123.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(822.4, 133.5);
      ctx.lineTo(831.5, 121.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(818.8, 130.7);
      ctx.lineTo(827.7, 118.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(815.5, 128.6);
      ctx.lineTo(824.3, 116.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(811.8, 125.8);
      ctx.lineTo(820.5, 113.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(808.5, 123.6);
      ctx.lineTo(817.1, 111.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(804.8, 120.9);
      ctx.lineTo(813.2, 108.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(801.4, 119.0);
      ctx.lineTo(809.7, 106.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(797.6, 116.3);
      ctx.lineTo(805.8, 103.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(794.2, 114.4);
      ctx.lineTo(802.3, 101.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(790.4, 111.7);
      ctx.lineTo(798.4, 98.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(787.0, 109.8);
      ctx.lineTo(794.9, 96.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(783.1, 107.3);
      ctx.lineTo(790.9, 94.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(779.6, 105.5);
      ctx.lineTo(787.3, 92.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(775.7, 103.1);
      ctx.lineTo(783.2, 89.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(772.2, 101.3);
      ctx.lineTo(779.7, 87.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(768.3, 98.8);
      ctx.lineTo(775.6, 85.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(764.7, 97.1);
      ctx.lineTo(772.0, 83.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(760.7, 94.9);
      ctx.lineTo(767.8, 81.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(757.1, 93.2);
      ctx.lineTo(764.1, 79.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(753.1, 91.0);
      ctx.lineTo(760.0, 77.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(749.6, 89.3);
      ctx.lineTo(756.3, 75.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(745.5, 87.1);
      ctx.lineTo(752.1, 73.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(741.9, 85.6);
      ctx.lineTo(748.4, 71.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(737.7, 83.6);
      ctx.lineTo(744.1, 69.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(734.1, 82.1);
      ctx.lineTo(740.4, 68.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(729.9, 80.0);
      ctx.lineTo(736.1, 66.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(726.3, 78.6);
      ctx.lineTo(732.3, 64.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(722.1, 76.6);
      ctx.lineTo(728.0, 62.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(718.4, 75.3);
      ctx.lineTo(724.2, 61.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(714.2, 73.5);
      ctx.lineTo(719.8, 59.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(710.5, 72.2);
      ctx.lineTo(716.0, 58.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(706.3, 70.3);
      ctx.lineTo(711.7, 56.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(702.6, 69.1);
      ctx.lineTo(707.8, 54.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(698.3, 67.3);
      ctx.lineTo(703.4, 53.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(694.5, 66.3);
      ctx.lineTo(699.5, 51.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(690.2, 64.6);
      ctx.lineTo(695.1, 50.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(686.4, 63.5);
      ctx.lineTo(691.2, 49.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(682.1, 61.9);
      ctx.lineTo(686.7, 47.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(678.3, 60.8);
      ctx.lineTo(682.9, 46.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(673.9, 59.4);
      ctx.lineTo(678.3, 44.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(670.1, 58.5);
      ctx.lineTo(674.4, 43.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(665.7, 57.0);
      ctx.lineTo(669.9, 42.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(661.9, 56.1);
      ctx.lineTo(665.9, 41.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(657.5, 54.7);
      ctx.lineTo(661.4, 39.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(653.7, 53.9);
      ctx.lineTo(657.4, 39.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(649.2, 52.6);
      ctx.lineTo(652.8, 37.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(645.4, 51.9);
      ctx.lineTo(648.9, 37.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(640.9, 50.7);
      ctx.lineTo(644.3, 35.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(637.0, 50.0);
      ctx.lineTo(640.3, 35.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(632.6, 48.8);
      ctx.lineTo(635.7, 33.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(628.7, 48.2);
      ctx.lineTo(631.7, 33.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(624.2, 47.2);
      ctx.lineTo(627.0, 32.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(620.3, 46.7);
      ctx.lineTo(623.0, 31.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(615.8, 45.7);
      ctx.lineTo(618.4, 30.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(611.9, 45.2);
      ctx.lineTo(614.4, 30.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(607.4, 44.2);
      ctx.lineTo(609.7, 29.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(603.5, 43.9);
      ctx.lineTo(605.7, 28.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(598.9, 43.1);
      ctx.lineTo(601.0, 28.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(595.0, 42.8);
      ctx.lineTo(596.9, 27.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(590.4, 42.1);
      ctx.lineTo(592.2, 26.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(586.5, 41.7);
      ctx.lineTo(588.2, 26.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(582.0, 41.0);
      ctx.lineTo(583.5, 25.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(578.0, 40.9);
      ctx.lineTo(579.5, 25.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(573.4, 40.3);
      ctx.lineTo(574.7, 25.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(569.5, 40.2);
      ctx.lineTo(570.7, 25.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(564.9, 39.7);
      ctx.lineTo(565.9, 24.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(561.0, 39.6);
      ctx.lineTo(561.9, 24.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(556.4, 39.1);
      ctx.lineTo(557.2, 23.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(552.5, 39.1);
      ctx.lineTo(553.1, 23.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(547.9, 38.9);
      ctx.lineTo(548.4, 23.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(544.0, 38.9);
      ctx.lineTo(544.3, 23.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(539.3, 38.6);
      ctx.lineTo(539.6, 23.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(535.4, 38.7);
      ctx.lineTo(535.5, 23.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(531.8, 38.5);
      ctx.lineTo(531.7, 23.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(526.9, 38.7);
      ctx.lineTo(526.7, 23.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(522.3, 38.7);
      ctx.lineTo(522.0, 23.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(518.4, 39.0);
      ctx.lineTo(517.9, 23.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(513.7, 38.9);
      ctx.lineTo(513.2, 23.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(509.8, 39.2);
      ctx.lineTo(509.2, 23.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(505.2, 39.2);
      ctx.lineTo(504.4, 23.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(501.3, 39.6);
      ctx.lineTo(500.4, 24.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(496.7, 39.8);
      ctx.lineTo(495.6, 24.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(492.8, 40.3);
      ctx.lineTo(491.6, 25.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(488.2, 40.5);
      ctx.lineTo(486.8, 25.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(484.3, 40.9);
      ctx.lineTo(482.8, 25.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(479.7, 41.2);
      ctx.lineTo(478.1, 26.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(475.8, 41.9);
      ctx.lineTo(474.1, 26.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(471.2, 42.3);
      ctx.lineTo(469.3, 27.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(467.3, 42.9);
      ctx.lineTo(465.3, 27.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(462.7, 43.4);
      ctx.lineTo(460.6, 28.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(458.9, 44.0);
      ctx.lineTo(456.6, 28.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(454.3, 44.5);
      ctx.lineTo(451.9, 29.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(450.4, 45.4);
      ctx.lineTo(447.9, 30.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(445.9, 46.0);
      ctx.lineTo(443.2, 31.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(442.0, 46.9);
      ctx.lineTo(439.3, 31.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(437.4, 47.5);
      ctx.lineTo(434.5, 32.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(433.6, 48.4);
      ctx.lineTo(430.6, 33.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(429.1, 49.2);
      ctx.lineTo(425.9, 34.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(425.3, 50.3);
      ctx.lineTo(422.0, 35.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(420.8, 51.1);
      ctx.lineTo(417.3, 36.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(417.0, 52.2);
      ctx.lineTo(413.4, 37.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(412.4, 53.0);
      ctx.lineTo(408.8, 38.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(408.7, 54.1);
      ctx.lineTo(404.9, 39.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(404.2, 55.2);
      ctx.lineTo(400.2, 40.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(400.5, 56.4);
      ctx.lineTo(396.4, 41.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(396.0, 57.5);
      ctx.lineTo(391.8, 42.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(392.2, 58.7);
      ctx.lineTo(387.9, 44.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(387.7, 59.8);
      ctx.lineTo(383.3, 45.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(384.0, 61.1);
      ctx.lineTo(379.5, 46.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(379.6, 62.4);
      ctx.lineTo(374.9, 47.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(376.0, 63.9);
      ctx.lineTo(371.1, 49.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(371.5, 65.2);
      ctx.lineTo(366.6, 50.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(367.9, 66.6);
      ctx.lineTo(362.8, 52.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(363.4, 67.9);
      ctx.lineTo(358.2, 53.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(359.8, 69.4);
      ctx.lineTo(354.5, 55.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(355.5, 71.0);
      ctx.lineTo(350.0, 56.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(351.9, 72.6);
      ctx.lineTo(346.3, 58.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(347.5, 74.1);
      ctx.lineTo(341.8, 60.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(344.0, 75.7);
      ctx.lineTo(338.1, 61.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(339.6, 77.3);
      ctx.lineTo(333.6, 63.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(336.1, 79.0);
      ctx.lineTo(330.0, 65.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(331.8, 80.8);
      ctx.lineTo(325.6, 66.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(328.3, 82.5);
      ctx.lineTo(322.0, 68.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(324.0, 84.3);
      ctx.lineTo(317.6, 70.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(320.5, 86.1);
      ctx.lineTo(314.0, 72.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(316.3, 87.9);
      ctx.lineTo(309.6, 74.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(312.9, 89.8);
      ctx.lineTo(306.1, 76.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(308.7, 91.8);
      ctx.lineTo(301.8, 78.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(305.3, 93.7);
      ctx.lineTo(298.3, 80.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(301.1, 95.7);
      ctx.lineTo(293.9, 82.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(297.7, 97.6);
      ctx.lineTo(290.4, 84.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(293.6, 99.7);
      ctx.lineTo(286.2, 86.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(290.3, 101.8);
      ctx.lineTo(282.8, 88.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(286.2, 104.0);
      ctx.lineTo(278.6, 90.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(282.9, 106.1);
      ctx.lineTo(275.1, 92.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(278.8, 108.2);
      ctx.lineTo(270.9, 95.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(275.5, 110.3);
      ctx.lineTo(267.5, 97.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(271.5, 112.7);
      ctx.lineTo(263.4, 99.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(268.3, 114.9);
      ctx.lineTo(260.1, 102.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(264.3, 117.3);
      ctx.lineTo(256.0, 104.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(261.1, 119.6);
      ctx.lineTo(252.7, 106.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(257.1, 121.9);
      ctx.lineTo(248.6, 109.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(254.0, 124.3);
      ctx.lineTo(245.4, 111.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(250.1, 126.8);
      ctx.lineTo(241.4, 114.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(247.0, 129.2);
      ctx.lineTo(238.2, 116.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(243.2, 131.7);
      ctx.lineTo(234.2, 119.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(240.1, 134.2);
      ctx.lineTo(231.0, 121.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(236.2, 136.7);
      ctx.lineTo(227.1, 124.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(233.2, 139.3);
      ctx.lineTo(224.0, 127.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(229.5, 142.0);
      ctx.lineTo(220.1, 129.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(226.5, 144.5);
      ctx.lineTo(217.1, 132.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(222.8, 147.3);
      ctx.lineTo(213.2, 135.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(219.8, 149.8);
      ctx.lineTo(210.1, 138.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(216.1, 152.6);
      ctx.lineTo(206.4, 140.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(213.3, 155.3);
      ctx.lineTo(203.4, 143.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(209.7, 158.2);
      ctx.lineTo(199.7, 146.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(206.8, 160.9);
      ctx.lineTo(196.8, 149.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(203.2, 163.8);
      ctx.lineTo(193.1, 152.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(200.4, 166.5);
      ctx.lineTo(190.1, 155.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(196.9, 169.6);
      ctx.lineTo(186.5, 158.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(194.2, 172.4);
      ctx.lineTo(183.7, 161.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(190.7, 175.4);
      ctx.lineTo(180.2, 164.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(188.0, 178.3);
      ctx.lineTo(177.4, 167.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(184.6, 181.3);
      ctx.lineTo(173.8, 170.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(181.9, 184.2);
      ctx.lineTo(171.1, 173.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(178.6, 187.4);
      ctx.lineTo(167.6, 176.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(176.0, 190.4);
      ctx.lineTo(165.0, 179.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(172.7, 193.6);
      ctx.lineTo(161.6, 183.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(170.1, 196.6);
      ctx.lineTo(158.9, 186.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(166.8, 199.8);
      ctx.lineTo(155.5, 189.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(164.3, 202.9);
      ctx.lineTo(153.0, 192.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(161.2, 206.2);
      ctx.lineTo(149.7, 196.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(158.8, 209.3);
      ctx.lineTo(147.2, 199.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(155.6, 212.7);
      ctx.lineTo(144.0, 202.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(153.2, 215.8);
      ctx.lineTo(141.5, 206.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(150.1, 219.2);
      ctx.lineTo(138.3, 209.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(147.8, 222.4);
      ctx.lineTo(135.9, 212.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(144.8, 225.9);
      ctx.lineTo(132.8, 216.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(142.5, 229.1);
      ctx.lineTo(130.5, 219.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(139.5, 232.6);
      ctx.lineTo(127.4, 223.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(137.2, 235.8);
      ctx.lineTo(125.0, 226.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(134.4, 239.4);
      ctx.lineTo(122.1, 230.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(132.2, 242.7);
      ctx.lineTo(119.9, 233.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(129.4, 246.4);
      ctx.lineTo(117.0, 237.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(127.3, 249.7);
      ctx.lineTo(114.8, 240.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(124.5, 253.4);
      ctx.lineTo(111.9, 244.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(122.4, 256.7);
      ctx.lineTo(109.7, 248.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(119.7, 260.5);
      ctx.lineTo(107.0, 252.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(117.8, 263.9);
      ctx.lineTo(105.0, 255.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(115.1, 267.7);
      ctx.lineTo(102.2, 259.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(113.2, 271.0);
      ctx.lineTo(100.2, 263.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(110.5, 274.8);
      ctx.lineTo(97.5, 266.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(108.7, 278.3);
      ctx.lineTo(95.6, 270.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(106.2, 282.2);
      ctx.lineTo(93.0, 274.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(104.4, 285.7);
      ctx.lineTo(91.2, 278.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(102.0, 289.6);
      ctx.lineTo(88.7, 282.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(100.2, 293.1);
      ctx.lineTo(86.8, 285.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(97.7, 297.0);
      ctx.lineTo(84.3, 289.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(96.1, 300.6);
      ctx.lineTo(82.6, 293.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(93.8, 304.6);
      ctx.lineTo(80.3, 297.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(92.2, 308.2);
      ctx.lineTo(78.6, 301.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(89.9, 312.2);
      ctx.lineTo(76.3, 305.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(88.3, 315.8);
      ctx.lineTo(74.6, 309.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(86.1, 319.9);
      ctx.lineTo(72.4, 313.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(84.7, 323.5);
      ctx.lineTo(70.8, 317.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(82.6, 327.7);
      ctx.lineTo(68.7, 321.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(81.2, 331.3);
      ctx.lineTo(67.2, 325.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(79.1, 335.4);
      ctx.lineTo(65.1, 329.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(77.6, 339.1);
      ctx.lineTo(63.6, 333.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(75.8, 343.3);
      ctx.lineTo(61.6, 337.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(74.5, 347.0);
      ctx.lineTo(60.3, 341.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(72.6, 351.2);
      ctx.lineTo(58.4, 345.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(71.4, 354.9);
      ctx.lineTo(57.1, 349.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(69.5, 359.2);
      ctx.lineTo(55.2, 353.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(68.3, 362.9);
      ctx.lineTo(53.9, 357.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(66.6, 367.2);
      ctx.lineTo(52.2, 362.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(65.5, 371.0);
      ctx.lineTo(51.1, 366.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(63.9, 375.3);
      ctx.lineTo(49.4, 370.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(62.8, 379.0);
      ctx.lineTo(48.3, 374.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(61.1, 383.4);
      ctx.lineTo(46.6, 378.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(60.1, 387.2);
      ctx.lineTo(45.5, 382.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(58.7, 391.6);
      ctx.lineTo(44.1, 387.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(57.8, 395.4);
      ctx.lineTo(43.1, 391.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(56.4, 399.8);
      ctx.lineTo(41.7, 395.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(55.5, 403.6);
      ctx.lineTo(40.7, 399.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(54.1, 408.0);
      ctx.lineTo(39.3, 404.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(53.3, 411.8);
      ctx.lineTo(38.5, 408.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(52.1, 416.3);
      ctx.lineTo(37.3, 412.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(51.4, 420.2);
      ctx.lineTo(36.5, 416.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(50.2, 424.6);
      ctx.lineTo(35.3, 421.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(49.5, 428.5);
      ctx.lineTo(34.5, 425.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(48.3, 432.9);
      ctx.lineTo(33.3, 429.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(47.8, 436.8);
      ctx.lineTo(32.8, 433.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(46.8, 441.4);
      ctx.lineTo(31.8, 438.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(46.3, 445.2);
      ctx.lineTo(31.2, 442.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(45.3, 449.8);
      ctx.lineTo(30.2, 447.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(44.8, 453.6);
      ctx.lineTo(29.7, 451.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(43.9, 458.2);
      ctx.lineTo(28.8, 455.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(43.6, 462.1);
      ctx.lineTo(28.4, 459.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(42.8, 466.6);
      ctx.lineTo(27.7, 464.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(42.5, 470.6);
      ctx.lineTo(27.3, 468.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(41.7, 475.1);
      ctx.lineTo(26.6, 473.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(41.4, 479.0);
      ctx.lineTo(26.2, 477.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(40.8, 483.6);
      ctx.lineTo(25.6, 482.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(40.6, 487.5);
      ctx.lineTo(25.4, 486.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(40.1, 492.1);
      ctx.lineTo(24.9, 490.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(40.0, 496.0);
      ctx.lineTo(24.8, 494.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(39.5, 500.6);
      ctx.lineTo(24.2, 499.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(39.3, 504.5);
      ctx.lineTo(24.1, 503.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(39.0, 509.2);
      ctx.lineTo(23.7, 508.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(39.0, 513.1);
      ctx.lineTo(23.8, 512.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(38.8, 517.7);
      ctx.lineTo(23.5, 517.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(38.8, 521.6);
      ctx.lineTo(23.6, 521.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(38.5, 526.2);
      ctx.lineTo(23.3, 526.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(38.6, 530.6);
      ctx.lineTo(23.3, 530.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(38.5, 534.8);
      ctx.lineTo(23.2, 534.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(38.7, 538.7);
      ctx.lineTo(23.5, 538.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(38.7, 543.3);
      ctx.lineTo(23.4, 543.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(39.0, 547.2);
      ctx.lineTo(23.7, 547.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(38.9, 551.8);
      ctx.lineTo(23.6, 552.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(39.2, 555.8);
      ctx.lineTo(23.9, 556.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(39.3, 560.4);
      ctx.lineTo(24.0, 561.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(39.8, 564.3);
      ctx.lineTo(24.5, 565.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(39.9, 568.9);
      ctx.lineTo(24.7, 570.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(40.4, 572.8);
      ctx.lineTo(25.2, 574.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(40.6, 577.4);
      ctx.lineTo(25.4, 578.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(41.0, 581.3);
      ctx.lineTo(25.8, 582.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(41.4, 585.9);
      ctx.lineTo(26.2, 587.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(42.1, 589.8);
      ctx.lineTo(26.9, 591.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(42.5, 594.4);
      ctx.lineTo(27.3, 596.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(43.2, 598.2);
      ctx.lineTo(28.0, 600.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(43.6, 602.8);
      ctx.lineTo(28.5, 605.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(44.2, 606.7);
      ctx.lineTo(29.1, 609.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(44.9, 611.3);
      ctx.lineTo(29.8, 613.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(45.7, 615.1);
      ctx.lineTo(30.7, 617.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(46.4, 619.7);
      ctx.lineTo(31.3, 622.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(47.2, 623.5);
      ctx.lineTo(32.2, 626.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(47.9, 628.1);
      ctx.lineTo(32.9, 631.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(48.8, 631.9);
      ctx.lineTo(33.8, 635.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(49.6, 636.4);
      ctx.lineTo(34.7, 639.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(50.7, 640.2);
      ctx.lineTo(35.8, 643.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(51.6, 644.8);
      ctx.lineTo(36.7, 648.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(52.6, 648.5);
      ctx.lineTo(37.8, 652.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(53.5, 653.1);
      ctx.lineTo(38.7, 656.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(54.6, 656.8);
      ctx.lineTo(39.8, 660.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(55.7, 661.3);
      ctx.lineTo(41.0, 665.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(56.9, 665.0);
      ctx.lineTo(42.2, 669.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(58.0, 669.5);
      ctx.lineTo(43.4, 673.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(59.3, 673.2);
      ctx.lineTo(44.6, 677.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(60.4, 677.7);
      ctx.lineTo(45.8, 682.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(61.8, 681.4);
      ctx.lineTo(47.2, 686.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(63.1, 685.8);
      ctx.lineTo(48.6, 690.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(64.5, 689.5);
      ctx.lineTo(50.0, 694.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(65.8, 693.9);
      ctx.lineTo(51.4, 698.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(67.2, 697.6);
      ctx.lineTo(52.8, 702.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(68.6, 702.0);
      ctx.lineTo(54.2, 707.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(70.2, 705.6);
      ctx.lineTo(55.9, 711.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(71.7, 709.9);
      ctx.lineTo(57.5, 715.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(73.3, 713.5);
      ctx.lineTo(59.1, 719.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(74.8, 717.9);
      ctx.lineTo(60.7, 723.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(76.4, 721.5);
      ctx.lineTo(62.3, 727.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(78.1, 725.8);
      ctx.lineTo(64.0, 731.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(79.8, 729.3);
      ctx.lineTo(65.9, 735.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(81.6, 733.6);
      ctx.lineTo(67.7, 739.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(83.4, 737.1);
      ctx.lineTo(69.5, 743.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(85.1, 741.3);
      ctx.lineTo(71.3, 747.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(86.9, 744.8);
      ctx.lineTo(73.1, 751.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(88.8, 749.0);
      ctx.lineTo(75.1, 755.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(90.7, 752.5);
      ctx.lineTo(77.1, 759.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(92.7, 756.6);
      ctx.lineTo(79.1, 763.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(94.6, 760.1);
      ctx.lineTo(81.1, 767.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(96.6, 764.2);
      ctx.lineTo(83.1, 771.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(98.6, 767.6);
      ctx.lineTo(85.2, 774.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(100.7, 771.7);
      ctx.lineTo(87.4, 779.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(102.8, 775.0);
      ctx.lineTo(89.5, 782.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(105.0, 779.1);
      ctx.lineTo(91.8, 786.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(107.1, 782.4);
      ctx.lineTo(93.9, 790.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(109.2, 786.5);
      ctx.lineTo(96.2, 794.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(111.4, 789.8);
      ctx.lineTo(98.4, 797.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(113.8, 793.7);
      ctx.lineTo(100.9, 801.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(116.0, 796.9);
      ctx.lineTo(103.2, 805.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(118.4, 800.9);
      ctx.lineTo(105.6, 809.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(120.7, 804.1);
      ctx.lineTo(107.9, 812.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(123.0, 808.1);
      ctx.lineTo(110.4, 816.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(125.4, 811.2);
      ctx.lineTo(112.9, 819.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(128.0, 815.1);
      ctx.lineTo(115.5, 823.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(130.4, 818.1);
      ctx.lineTo(118.0, 827.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(132.9, 822.0);
      ctx.lineTo(120.6, 831.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(135.3, 825.1);
      ctx.lineTo(123.1, 834.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(138.0, 828.9);
      ctx.lineTo(125.8, 838.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(140.5, 831.9);
      ctx.lineTo(128.4, 841.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(143.3, 835.6);
      ctx.lineTo(131.2, 845.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(145.8, 838.6);
      ctx.lineTo(133.9, 848.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(148.5, 842.3);
      ctx.lineTo(136.7, 852.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(151.1, 845.3);
      ctx.lineTo(139.3, 855.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(154.0, 848.9);
      ctx.lineTo(142.3, 858.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(156.7, 851.8);
      ctx.lineTo(145.1, 861.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(159.6, 855.4);
      ctx.lineTo(148.0, 865.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(162.3, 858.2);
      ctx.lineTo(150.8, 868.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(165.2, 861.8);
      ctx.lineTo(153.8, 872.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(167.9, 864.6);
      ctx.lineTo(156.6, 874.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(171.0, 868.1);
      ctx.lineTo(159.8, 878.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(173.8, 870.8);
      ctx.lineTo(162.7, 881.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(176.9, 874.2);
      ctx.lineTo(165.9, 884.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(179.7, 877.0);
      ctx.lineTo(168.8, 887.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(182.8, 880.4);
      ctx.lineTo(172.0, 891.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(185.7, 883.0);
      ctx.lineTo(175.0, 893.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(188.9, 886.3);
      ctx.lineTo(178.3, 897.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(191.9, 888.9);
      ctx.lineTo(181.4, 900.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(195.1, 892.2);
      ctx.lineTo(184.7, 903.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(198.1, 894.8);
      ctx.lineTo(187.7, 906.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(201.3, 898.1);
      ctx.lineTo(191.1, 909.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(204.4, 900.5);
      ctx.lineTo(194.3, 911.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(207.8, 903.6);
      ctx.lineTo(197.8, 915.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(210.9, 906.1);
      ctx.lineTo(200.9, 917.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(214.3, 909.2);
      ctx.lineTo(204.4, 920.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(217.3, 911.7);
      ctx.lineTo(207.6, 923.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(220.8, 914.7);
      ctx.lineTo(211.2, 926.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(224.0, 917.0);
      ctx.lineTo(214.5, 928.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(227.5, 920.0);
      ctx.lineTo(218.1, 932.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(230.7, 922.2);
      ctx.lineTo(221.4, 934.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(234.3, 925.2);
      ctx.lineTo(225.0, 937.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(237.5, 927.5);
      ctx.lineTo(228.3, 939.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(241.1, 930.3);
      ctx.lineTo(232.1, 942.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(244.4, 932.4);
      ctx.lineTo(235.5, 944.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(248.1, 935.2);
      ctx.lineTo(239.3, 947.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(251.4, 937.4);
      ctx.lineTo(242.7, 949.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(255.0, 940.2);
      ctx.lineTo(246.5, 952.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(258.4, 942.2);
      ctx.lineTo(249.9, 954.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(262.2, 944.8);
      ctx.lineTo(253.9, 957.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(265.6, 946.8);
      ctx.lineTo(257.3, 959.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(269.4, 949.5);
      ctx.lineTo(261.3, 962.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(272.8, 951.4);
      ctx.lineTo(264.7, 964.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(276.6, 954.0);
      ctx.lineTo(268.7, 967.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(280.1, 955.8);
      ctx.lineTo(272.3, 969.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(284.0, 958.3);
      ctx.lineTo(276.3, 971.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(287.5, 960.1);
      ctx.lineTo(279.9, 973.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(291.4, 962.5);
      ctx.lineTo(284.0, 975.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(294.9, 964.3);
      ctx.lineTo(287.5, 977.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(298.9, 966.7);
      ctx.lineTo(291.7, 980.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(302.4, 968.3);
      ctx.lineTo(295.3, 981.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(306.5, 970.6);
      ctx.lineTo(299.5, 984.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(310.0, 972.2);
      ctx.lineTo(303.2, 985.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(314.1, 974.5);
      ctx.lineTo(307.3, 988.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(317.6, 976.1);
      ctx.lineTo(311.0, 989.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(321.8, 978.2);
      ctx.lineTo(315.3, 992.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(325.4, 979.6);
      ctx.lineTo(319.0, 993.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(329.5, 981.7);
      ctx.lineTo(323.3, 995.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(333.2, 983.1);
      ctx.lineTo(327.0, 997.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(337.3, 985.2);
      ctx.lineTo(331.3, 999.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(341.0, 986.6);
      ctx.lineTo(335.1, 1000.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(345.2, 988.5);
      ctx.lineTo(339.4, 1002.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(348.9, 989.7);
      ctx.lineTo(343.3, 1003.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(353.2, 991.6);
      ctx.lineTo(347.6, 1005.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(356.9, 992.9);
      ctx.lineTo(351.4, 1007.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(361.1, 994.7);
      ctx.lineTo(355.8, 1009.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(364.8, 995.9);
      ctx.lineTo(359.7, 1010.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(369.2, 997.5);
      ctx.lineTo(364.1, 1011.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(372.9, 998.6);
      ctx.lineTo(368.0, 1013.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(377.3, 1000.2);
      ctx.lineTo(372.5, 1014.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(381.0, 1001.3);
      ctx.lineTo(376.4, 1015.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(385.3, 1003.0);
      ctx.lineTo(380.8, 1017.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(389.2, 1003.9);
      ctx.lineTo(384.8, 1018.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(393.6, 1005.3);
      ctx.lineTo(389.3, 1020.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(397.4, 1006.2);
      ctx.lineTo(393.2, 1020.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(401.8, 1007.6);
      ctx.lineTo(397.8, 1022.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(405.6, 1008.5);
      ctx.lineTo(401.7, 1023.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(410.0, 1009.9);
      ctx.lineTo(406.3, 1024.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(413.9, 1010.6);
      ctx.lineTo(410.2, 1025.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(418.3, 1011.8);
      ctx.lineTo(414.8, 1026.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(422.2, 1012.5);
      ctx.lineTo(418.8, 1027.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(426.6, 1013.7);
      ctx.lineTo(423.4, 1028.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(430.5, 1014.4);
      ctx.lineTo(427.4, 1029.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(435.0, 1015.5);
      ctx.lineTo(432.0, 1030.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(438.9, 1016.0);
      ctx.lineTo(436.0, 1031.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(443.4, 1017.0);
      ctx.lineTo(440.7, 1032.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(447.3, 1017.5);
      ctx.lineTo(444.7, 1032.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(451.8, 1018.5);
      ctx.lineTo(449.4, 1033.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(455.7, 1019.0);
      ctx.lineTo(453.3, 1034.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(460.2, 1019.8);
      ctx.lineTo(458.0, 1034.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(464.1, 1020.1);
      ctx.lineTo(462.1, 1035.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(468.7, 1020.9);
      ctx.lineTo(466.8, 1036.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(472.6, 1021.2);
      ctx.lineTo(470.8, 1036.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(477.2, 1022.0);
      ctx.lineTo(475.5, 1037.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(481.1, 1022.3);
      ctx.lineTo(479.5, 1037.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(485.7, 1022.8);
      ctx.lineTo(484.3, 1038.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(489.6, 1023.0);
      ctx.lineTo(488.3, 1038.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(494.2, 1023.5);
      ctx.lineTo(493.0, 1038.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(498.1, 1023.6);
      ctx.lineTo(497.1, 1038.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(502.7, 1024.1);
      ctx.lineTo(501.8, 1039.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(506.6, 1024.2);
      ctx.lineTo(505.9, 1039.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(511.2, 1024.5);
      ctx.lineTo(510.6, 1039.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(515.2, 1024.4);
      ctx.lineTo(514.6, 1039.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(519.8, 1024.7);
      ctx.lineTo(519.4, 1040.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(523.7, 1024.7);
      ctx.lineTo(523.4, 1039.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(528.3, 1025.0);
      ctx.lineTo(528.2, 1040.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(532.2, 1024.9);
      ctx.lineTo(532.2, 1040.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(536.8, 1024.9);
      ctx.lineTo(537.0, 1040.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(540.8, 1024.6);
      ctx.lineTo(541.0, 1039.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(545.4, 1024.7);
      ctx.lineTo(545.8, 1040.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(549.3, 1024.4);
      ctx.lineTo(549.8, 1039.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(553.9, 1024.5);
      ctx.lineTo(554.6, 1039.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(557.8, 1024.2);
      ctx.lineTo(558.6, 1039.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(562.4, 1024.0);
      ctx.lineTo(563.4, 1039.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(566.3, 1023.5);
      ctx.lineTo(567.4, 1038.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(571.0, 1023.3);
      ctx.lineTo(572.2, 1038.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(574.9, 1022.9);
      ctx.lineTo(576.2, 1038.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(579.5, 1022.7);
      ctx.lineTo(580.9, 1037.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(583.4, 1022.2);
      ctx.lineTo(584.9, 1037.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(588.0, 1021.8);
      ctx.lineTo(589.7, 1036.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(591.8, 1021.1);
      ctx.lineTo(593.7, 1036.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(596.4, 1020.7);
      ctx.lineTo(598.4, 1035.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(600.3, 1020.0);
      ctx.lineTo(602.4, 1035.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(604.9, 1019.6);
      ctx.lineTo(607.2, 1034.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(608.7, 1018.8);
      ctx.lineTo(611.1, 1033.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(613.3, 1018.2);
      ctx.lineTo(615.8, 1033.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(617.1, 1017.3);
      ctx.lineTo(619.8, 1032.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(621.7, 1016.7);
      ctx.lineTo(624.5, 1031.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(625.5, 1015.8);
      ctx.lineTo(628.4, 1030.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(630.1, 1015.2);
      ctx.lineTo(633.2, 1030.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(633.9, 1014.2);
      ctx.lineTo(637.1, 1029.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(638.5, 1013.3);
      ctx.lineTo(641.8, 1028.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(642.2, 1012.3);
      ctx.lineTo(645.6, 1027.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(646.8, 1011.4);
      ctx.lineTo(650.3, 1026.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(650.6, 1010.4);
      ctx.lineTo(654.2, 1025.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(655.1, 1009.5);
      ctx.lineTo(658.9, 1024.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(658.8, 1008.2);
      ctx.lineTo(662.7, 1023.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(663.3, 1007.1);
      ctx.lineTo(667.4, 1021.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(667.0, 1005.9);
      ctx.lineTo(671.2, 1020.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(671.5, 1004.8);
      ctx.lineTo(675.8, 1019.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(675.2, 1003.6);
      ctx.lineTo(679.7, 1018.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(679.7, 1002.4);
      ctx.lineTo(684.3, 1017.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(683.4, 1001.0);
      ctx.lineTo(688.1, 1015.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(687.8, 999.7);
      ctx.lineTo(692.6, 1014.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(691.5, 998.3);
      ctx.lineTo(696.4, 1012.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(695.9, 996.9);
      ctx.lineTo(701.0, 1011.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(699.5, 995.5);
      ctx.lineTo(704.7, 1009.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(703.9, 994.1);
      ctx.lineTo(709.3, 1008.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(707.5, 992.5);
      ctx.lineTo(713.0, 1006.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(711.9, 990.9);
      ctx.lineTo(717.5, 1005.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(715.5, 989.3);
      ctx.lineTo(721.1, 1003.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(719.8, 987.8);
      ctx.lineTo(725.6, 1001.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(723.4, 986.2);
      ctx.lineTo(729.3, 1000.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(727.7, 984.5);
      ctx.lineTo(733.8, 998.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(731.2, 982.7);
      ctx.lineTo(737.4, 996.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(735.5, 981.0);
      ctx.lineTo(741.8, 994.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(739.0, 979.2);
      ctx.lineTo(745.4, 993.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(743.2, 977.4);
      ctx.lineTo(749.8, 991.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(746.7, 975.6);
      ctx.lineTo(753.4, 989.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(750.9, 973.7);
      ctx.lineTo(757.7, 987.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(754.3, 971.7);
      ctx.lineTo(761.2, 985.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(758.5, 969.8);
      ctx.lineTo(765.5, 983.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(761.9, 967.8);
      ctx.lineTo(769.0, 981.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(766.1, 965.9);
      ctx.lineTo(773.4, 979.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(769.4, 963.8);
      ctx.lineTo(776.8, 977.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(773.5, 961.7);
      ctx.lineTo(781.0, 975.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(776.8, 959.6);
      ctx.lineTo(784.4, 972.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(780.9, 957.4);
      ctx.lineTo(788.6, 970.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(784.2, 955.3);
      ctx.lineTo(792.1, 968.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(788.3, 953.1);
      ctx.lineTo(796.2, 966.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(791.5, 950.8);
      ctx.lineTo(799.6, 963.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(795.5, 948.5);
      ctx.lineTo(803.7, 961.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(798.7, 946.2);
      ctx.lineTo(807.0, 959.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(802.7, 943.9);
      ctx.lineTo(811.1, 956.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(805.9, 941.6);
      ctx.lineTo(814.4, 954.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(809.8, 939.2);
      ctx.lineTo(818.4, 951.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(812.9, 936.8);
      ctx.lineTo(821.6, 949.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(816.7, 934.2);
      ctx.lineTo(825.6, 946.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(819.8, 931.8);
      ctx.lineTo(828.8, 944.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(823.7, 929.3);
      ctx.lineTo(832.8, 941.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(826.8, 926.9);
      ctx.lineTo(835.9, 939.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(830.5, 924.1);
      ctx.lineTo(839.8, 936.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(833.5, 921.6);
      ctx.lineTo(842.9, 933.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(837.2, 918.9);
      ctx.lineTo(846.7, 930.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(840.2, 916.3);
      ctx.lineTo(849.8, 928.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(844.0, 913.6);
      ctx.lineTo(853.6, 925.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(846.9, 911.0);
      ctx.lineTo(856.6, 922.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(850.5, 908.1);
      ctx.lineTo(860.3, 919.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(853.3, 905.4);
      ctx.lineTo(863.3, 916.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(856.9, 902.5);
      ctx.lineTo(867.0, 914.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(859.8, 899.8);
      ctx.lineTo(869.9, 911.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(863.4, 896.9);
      ctx.lineTo(873.6, 908.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(866.1, 894.1);
      ctx.lineTo(876.5, 905.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(869.6, 891.0);
      ctx.lineTo(880.0, 902.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(872.3, 888.2);
      ctx.lineTo(882.8, 899.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(875.7, 885.1);
      ctx.lineTo(886.4, 896.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(878.4, 882.3);
      ctx.lineTo(889.2, 893.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(881.9, 879.1);
      ctx.lineTo(892.7, 889.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(884.4, 876.2);
      ctx.lineTo(895.4, 886.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(887.7, 873.0);
      ctx.lineTo(898.8, 883.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(890.3, 870.0);
      ctx.lineTo(901.4, 880.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(893.6, 866.8);
      ctx.lineTo(904.8, 877.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(896.2, 863.8);
      ctx.lineTo(907.5, 874.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(899.4, 860.5);
      ctx.lineTo(910.8, 870.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(901.8, 857.4);
      ctx.lineTo(913.3, 867.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(905.0, 854.0);
      ctx.lineTo(916.5, 864.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(907.4, 850.9);
      ctx.lineTo(919.0, 860.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(910.6, 847.6);
      ctx.lineTo(922.3, 857.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(913.0, 844.5);
      ctx.lineTo(924.8, 854.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(915.9, 840.9);
      ctx.lineTo(927.8, 850.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(918.2, 837.7);
      ctx.lineTo(930.2, 847.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(921.2, 834.2);
      ctx.lineTo(933.3, 843.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(923.5, 831.0);
      ctx.lineTo(935.6, 840.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(926.5, 827.5);
      ctx.lineTo(938.7, 836.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(928.7, 824.2);
      ctx.lineTo(941.0, 833.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(931.5, 820.6);
      ctx.lineTo(943.9, 829.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(933.6, 817.3);
      ctx.lineTo(946.1, 826.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(936.4, 813.6);
      ctx.lineTo(949.0, 822.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(938.6, 810.3);
      ctx.lineTo(951.2, 819.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(941.3, 806.6);
      ctx.lineTo(954.0, 815.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(943.3, 803.2);
      ctx.lineTo(956.0, 811.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(945.9, 799.4);
      ctx.lineTo(958.8, 807.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(947.9, 796.0);
      ctx.lineTo(960.8, 804.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(950.6, 792.2);
      ctx.lineTo(963.5, 800.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(952.5, 788.9);
      ctx.lineTo(965.5, 796.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(955.0, 785.0);
      ctx.lineTo(968.1, 792.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(956.8, 781.5);
      ctx.lineTo(970.0, 789.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(959.3, 777.6);
      ctx.lineTo(972.5, 785.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(961.1, 774.1);
      ctx.lineTo(974.4, 781.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(963.6, 770.2);
      ctx.lineTo(976.9, 777.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(965.3, 766.7);
      ctx.lineTo(978.8, 774.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(967.6, 762.7);
      ctx.lineTo(981.1, 769.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(969.2, 759.1);
      ctx.lineTo(982.8, 766.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(971.5, 755.1);
      ctx.lineTo(985.1, 762.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(973.1, 751.5);
      ctx.lineTo(986.8, 758.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(975.4, 747.5);
      ctx.lineTo(989.1, 754.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(976.9, 743.9);
      ctx.lineTo(990.7, 750.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(979.0, 739.7);
      ctx.lineTo(992.8, 746.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(980.5, 736.1);
      ctx.lineTo(994.4, 742.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(982.5, 731.9);
      ctx.lineTo(996.5, 738.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(984.0, 728.3);
      ctx.lineTo(998.0, 734.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(986.0, 724.2);
      ctx.lineTo(1000.1, 730.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(987.3, 720.5);
      ctx.lineTo(1001.4, 726.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(989.2, 716.2);
      ctx.lineTo(1003.3, 722.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(990.5, 712.5);
      ctx.lineTo(1004.7, 718.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(992.3, 708.3);
      ctx.lineTo(1006.6, 713.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(993.6, 704.6);
      ctx.lineTo(1007.9, 709.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(995.4, 700.3);
      ctx.lineTo(1009.8, 705.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(996.5, 696.6);
      ctx.lineTo(1010.9, 701.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(998.1, 692.2);
      ctx.lineTo(1012.6, 697.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(999.2, 688.5);
      ctx.lineTo(1013.7, 693.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1000.9, 684.2);
      ctx.lineTo(1015.4, 688.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1002.0, 680.4);
      ctx.lineTo(1016.5, 685.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1003.5, 676.0);
      ctx.lineTo(1018.1, 680.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1004.4, 672.2);
      ctx.lineTo(1019.0, 676.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1005.8, 667.8);
      ctx.lineTo(1020.5, 672.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1006.7, 664.0);
      ctx.lineTo(1021.4, 668.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1008.2, 659.6);
      ctx.lineTo(1022.9, 663.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1009.1, 655.8);
      ctx.lineTo(1023.8, 659.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1010.3, 651.3);
      ctx.lineTo(1025.1, 655.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1011.0, 647.5);
      ctx.lineTo(1025.9, 651.1);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1012.2, 643.0);
      ctx.lineTo(1027.1, 646.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1012.9, 639.2);
      ctx.lineTo(1027.8, 642.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1014.1, 634.7);
      ctx.lineTo(1029.1, 637.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1014.8, 630.9);
      ctx.lineTo(1029.8, 633.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1015.8, 626.3);
      ctx.lineTo(1030.8, 629.3);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1016.3, 622.5);
      ctx.lineTo(1031.4, 625.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1017.3, 617.9);
      ctx.lineTo(1032.4, 620.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1017.8, 614.1);
      ctx.lineTo(1032.9, 616.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1018.8, 609.5);
      ctx.lineTo(1033.9, 611.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1019.3, 605.6);
      ctx.lineTo(1034.4, 607.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1020.0, 601.1);
      ctx.lineTo(1035.2, 603.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1020.4, 597.2);
      ctx.lineTo(1035.5, 599.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1021.1, 592.6);
      ctx.lineTo(1036.3, 594.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1021.4, 588.7);
      ctx.lineTo(1036.6, 590.5);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1022.2, 584.1);
      ctx.lineTo(1037.4, 585.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1022.4, 580.2);
      ctx.lineTo(1037.6, 581.7);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1022.9, 575.6);
      ctx.lineTo(1038.1, 577.0);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1023.1, 571.7);
      ctx.lineTo(1038.3, 572.9);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1023.6, 567.1);
      ctx.lineTo(1038.8, 568.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1023.7, 563.2);
      ctx.lineTo(1038.9, 564.2);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1024.2, 558.6);
      ctx.lineTo(1039.5, 559.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1024.2, 554.7);
      ctx.lineTo(1039.5, 555.4);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1024.5, 550.1);
      ctx.lineTo(1039.8, 550.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1024.4, 546.1);
      ctx.lineTo(1039.7, 546.6);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1024.7, 541.5);
      ctx.lineTo(1040.0, 541.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1024.7, 537.6);
      ctx.lineTo(1039.9, 537.8);
      ctx.stroke();

      // 1///
      ctx.beginPath();
      ctx.moveTo(1025.0, 533.0);
      ctx.lineTo(1040.2, 533.0);
      ctx.stroke();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }

    window.addEventListener('load', init);