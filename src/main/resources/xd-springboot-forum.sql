/*
 Navicat Premium Data Transfer

 Source Server         : test
 Source Server Type    : MySQL
 Source Server Version : 50730
 Source Host           : localhost:3306
 Source Schema         : xd-springboot-forum

 Target Server Type    : MySQL
 Target Server Version : 50730
 File Encoding         : 65001

 Date: 06/06/2022 10:40:14
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for color
-- ----------------------------
DROP TABLE IF EXISTS `color`;
CREATE TABLE `color` (
  `color_id` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `colors` varchar(512) DEFAULT NULL,
  `id` int(5) DEFAULT NULL,
  PRIMARY KEY (`color_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of color
-- ----------------------------
BEGIN;
INSERT INTO `color` (`color_id`, `color`, `colors`, `id`) VALUES ('1', 'blue', '[{\"name\":\"-\",\"key\":\"#0097FD\"},{\"name\":\"100\", \"key\":\"#E6F1FC\"},{\"name\":\"200\", \"key\":\"#A3D0FD\"},{\"name\":\"300\", \"key\":\"#0587ff\"},{\"name\":\"400\", \"key\":\"#1d4ed8\"},{\"name\":\"500\", \"key\":\"#1e40af\"},{\"name\":\"600\", \"key\":\"#1e3a8a\"}]', 0);
INSERT INTO `color` (`color_id`, `color`, `colors`, `id`) VALUES ('2', 'green', '[{\"name\":\"-\",\"key\":\"#04BF8D\"},{\"name\":\"100\", \"key\":\"#E6F9F4\"},{\"name\":\"200\", \"key\":\"#CDF2E8\"},{\"name\":\"300\", \"key\":\"#009688\"},{\"name\":\"400\", \"key\":\"#15803d\"},{\"name\":\"500\", \"key\":\"#166534\"},{\"name\":\"600\", \"key\":\"#14532d\"}]', 1);
INSERT INTO `color` (`color_id`, `color`, `colors`, `id`) VALUES ('3', 'yellow', '[{\"name\":\"-\",\"key\":\"#FFAA00\"},{\"name\":\"100\", \"key\":\"#FFF7E6\"},{\"name\":\"200\", \"key\":\"#FFDD99\"},{\"name\":\"300\", \"key\":\"#FCBE31\"},{\"name\":\"400\", \"key\":\"#F09836\"},{\"name\":\"500\", \"key\":\"#a16207\"},{\"name\":\"600\", \"key\":\"#b45309\"}]', 3);
INSERT INTO `color` (`color_id`, `color`, `colors`, `id`) VALUES ('4', 'red', '[{\"name\":\"-\",\"key\":\"#FF4F23\"},{\"name\":\"100\", \"key\":\"#FFEDE9\"},{\"name\":\"200\", \"key\":\"#FFB9A7\"},{\"name\":\"300\", \"key\":\"#E55137\"},{\"name\":\"400\", \"key\":\"#dc2626\"},{\"name\":\"500\", \"key\":\"#b91c1c\"},{\"name\":\"600\", \"key\":\"#991b1b\"}]', 2);
INSERT INTO `color` (`color_id`, `color`, `colors`, `id`) VALUES ('5', 'grey', '[{\"name\":\"-\",\"key\":\"#303133\"},{\"name\":\"100\", \"key\":\"#F5F6F7\"},{\"name\":\"200\", \"key\":\"#eeeeee\"},{\"name\":\"300\", \"key\":\"#DFE6EC\"},{\"name\":\"400\", \"key\":\"#DCDFE6\"},{\"name\":\"500\", \"key\":\"#C0C4CC\"},{\"name\":\"600\", \"key\":\"#bbbbbb\"},{\"name\":\"700\", \"key\":\"#909399\"},{\"name\":\"800\", \"key\":\"#797979\"},{\"name\":\"900\", \"key\":\"#606266\"}]', 4);
COMMIT;

-- ----------------------------
-- Table structure for modularization
-- ----------------------------
DROP TABLE IF EXISTS `modularization`;
CREATE TABLE `modularization` (
  `id` int(3) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `src` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of modularization
-- ----------------------------
BEGIN;
INSERT INTO `modularization` (`id`, `name`, `src`) VALUES (1, '颜色', 'colors');
COMMIT;

-- ----------------------------
-- Table structure for styles
-- ----------------------------
DROP TABLE IF EXISTS `styles`;
CREATE TABLE `styles` (
  `id` int(3) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `parent_id` int(3) DEFAULT NULL,
  `level` int(1) DEFAULT NULL,
  `src` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of styles
-- ----------------------------
BEGIN;
INSERT INTO `styles` (`id`, `name`, `parent_id`, `level`, `src`) VALUES (1, '颜色', 0, 1, NULL);
INSERT INTO `styles` (`id`, `name`, `parent_id`, `level`, `src`) VALUES (2, '颜色', 1, 2, 'colors');
INSERT INTO `styles` (`id`, `name`, `parent_id`, `level`, `src`) VALUES (3, '按钮', 0, 1, NULL);
INSERT INTO `styles` (`id`, `name`, `parent_id`, `level`, `src`) VALUES (4, '按钮', 3, 2, 'buttons');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(8) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `type` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` (`id`, `name`, `password`, `token`, `type`) VALUES (1, 'ZhouDH', '123456', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6IjIxMyIsImV4cCI6MTY1NDg5Nzg5OSwidXNlcm5hbWUiOiJaaG91REgifQ.HmAPG0ihRS_hCVTywGFC8lkJGSLL95DoIk_k86XoF8U', '1');
INSERT INTO `user` (`id`, `name`, `password`, `token`, `type`) VALUES (2, '123', '456', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6IjQ1NiIsImV4cCI6MTY1NTE0MDYyNywidXNlcm5hbWUiOiIxMjMifQ.ZMiyxZ7cjajREp3iHZpEX-L_KHREa9GPikD39Lx_bRU', '2');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
