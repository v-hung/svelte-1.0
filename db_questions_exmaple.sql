-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 14, 2023 at 12:14 PM
-- Server version: 10.10.2-MariaDB-1:10.10.2+maria~ubu2204
-- PHP Version: 8.0.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sveltekit-1.0`
--

-- --------------------------------------------------------

--
-- Table structure for table `Account`
--

CREATE TABLE `Account` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `type` varchar(191) NOT NULL,
  `provider` varchar(191) NOT NULL,
  `providerAccountId` varchar(191) NOT NULL,
  `refresh_token` varchar(191) DEFAULT NULL,
  `access_token` varchar(191) DEFAULT NULL,
  `expires_at` int(11) DEFAULT NULL,
  `token_type` varchar(191) DEFAULT NULL,
  `scope` varchar(191) DEFAULT NULL,
  `id_token` varchar(191) DEFAULT NULL,
  `session_state` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Answers`
--

CREATE TABLE `Answers` (
  `id` varchar(191) NOT NULL,
  `answer_name` varchar(191) NOT NULL,
  `question_id` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Answers`
--

INSERT INTO `Answers` (`id`, `answer_name`, `question_id`) VALUES
('cle03x87x00044wki5s3sxo2o', 'a', 'cle03x87x00034wki3dahn7xe'),
('cle03x87y00074wkiy6st2dam', 'a', 'cle03x87y00064wkixrl3emkp'),
('cle03x87y000a4wkiuqwuj104', 'a', 'cle03x87y00094wki059evjsm'),
('cle03x87y000d4wkir11pjlce', 'a', 'cle03x87y000c4wkitemn4pj3'),
('cle03x87y000g4wki054acsn3', 'a', 'cle03x87y000f4wkiwqbycxor'),
('cle03x87y000j4wkiouw84bqi', 'a', 'cle03x87y000i4wkiyhfhurzw'),
('cle03x87y00154wki80j2pf0i', 'true', 'cle03x87y00144wkind0ck9lb'),
('cle03x87y00184wkie7xz7k2t', 'true', 'cle03x87y00174wkin2n3412d'),
('cle03x87y001b4wkizso8w5w8', 'true', 'cle03x87y001a4wkiu3p5k54w'),
('cle03x87y001e4wkiyx8qitp4', 'true', 'cle03x87y001d4wkigd7c3y0c'),
('cle03x87z001u4wki8jth6hfy', 'a', 'cle03x87z001t4wkiz0dhzh2c'),
('cle03x87z001x4wkine90u4vt', 'a', 'cle03x87z001w4wkiunvg4oqs'),
('cle03x87z00204wkihhmd6pg4', 'a', 'cle03x87z001z4wkivkka9w4g'),
('cle03x881004n4wkiub1jgi4p', 'a', 'cle03x881004m4wkiewnmo9y4'),
('cle03x881004q4wkioqw70cvg', 'a', 'cle03x881004p4wkiikcrv7bf'),
('cle03x881004t4wkisyw2vksk', 'a', 'cle03x881004s4wkiwirpst1h'),
('cle03x881004w4wki1ld367z0', 'a', 'cle03x881004v4wkine699qs5'),
('cle03x882005c4wki47445sud', 'fast', 'cle03x882005b4wkibkgcfqbg'),
('cle03x882005f4wkiecs3yiyf', 'fast', 'cle03x882005e4wkikloh75x7'),
('cle03x882005i4wkil12u8471', 'fast', 'cle03x882005h4wkikrsygmb1'),
('cle03x882005l4wki82yvtcvh', 'fast', 'cle03x882005k4wkijdvhk1in'),
('cle03x882005o4wki0laid1wj', 'fast', 'cle03x882005n4wki3fj462i4'),
('cle03x88200674wki8dfpl80k', 'yes', 'cle03x88200664wkizeiitatm'),
('cle03x882006a4wkit3i823sg', 'yes', 'cle03x88200694wki3gftcskj'),
('cle03x882006d4wkit79hoe0w', 'yes', 'cle03x882006c4wkimovxear5'),
('cle03x882006g4wki5nl50htr', 'yes', 'cle03x882006f4wkifwd85u5x'),
('cle03x88500964wki8swi7h27', 'An increasing divergence of attitudes towards Al', 'cle03x88500954wkiuhgz9iha'),
('cle03x88500994wki9n9t2nn1', 'Reasons why we have more faith in human judgement than in Al', 'cle03x88500984wkibjqqocgm'),
('cle03x885009c4wki26xkspq5', 'The superiority of Al projections over those made by humans', 'cle03x885009b4wki6gqge4ts'),
('cle03x885009f4wkivtra9ge0', 'The process by which Al can help us make good decisions', 'cle03x885009e4wkiwrq2pk82'),
('cle03x885009i4wkiolmt6lop', 'The advantages of involving users in Al processes', 'cle03x885009h4wkifkjkfqlf'),
('cle03x885009l4wkiw06evh6k', 'Widespread distrust of an Al innovation', 'cle03x885009k4wkinlvxqwe0'),
('cle03x88500a74wkijcr55zo4', 'a', 'cle03x88500a64wkivft4zjyc'),
('cle03x88500aa4wkirxnredrr', 'a', 'cle03x88500a94wkipiszw6g9'),
('cle03x88500ad4wki7b5snh0w', 'a', 'cle03x88500ac4wkiz2tviz2t'),
('cle03x88600aq4wkis096i0ph', 'yes', 'cle03x88600ap4wkipgl0x8bw'),
('cle03x88600at4wki1azmd6ot', 'yes', 'cle03x88600as4wkiv28lj1nu'),
('cle03x88600aw4wkip16vmkvi', 'yes', 'cle03x88600av4wkie7ro9mzc'),
('cle03x88600az4wkia8pxt9qu', 'yes', 'cle03x88600ay4wki2jao5vx0'),
('cle03x88600b24wkisaa3jjiv', 'yes', 'cle03x88600b14wkigffv3i2b');

-- --------------------------------------------------------

--
-- Table structure for table `GroupQuestions`
--

CREATE TABLE `GroupQuestions` (
  `id` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `image` varchar(191) DEFAULT NULL,
  `type` varchar(191) NOT NULL,
  `options` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`options`)),
  `passage_id` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `GroupQuestions`
--

INSERT INTO `GroupQuestions` (`id`, `title`, `image`, `type`, `options`, `passage_id`) VALUES
('cle03x87u00024wkigrwe11ft', 'Diagram Label Completion', '/storage/f1c35a65-f84c-4e52-a2cd-136324088348.JPG', 'diagram', '{}', 'cle03x87o00014wkip0ygovc8'),
('cle03x87y00134wki03bizjh6', 'True / False / Not given', '', 'true-false', '{}', 'cle03x87o00014wkip0ygovc8'),
('cle03x87z001s4wkihhbi97am', 'Short Answer', '', 'short', '{}', 'cle03x87o00014wkip0ygovc8'),
('cle03x881004l4wkin16n7ts4', 'Single Answer', '', 'single', '{}', 'cle03x881004k4wkikfsqbr96'),
('cle03x881005a4wki9qa1fhob', 'Summary, Note Completion With Hint', '', 'summary', '{\"summary_title\":\"Studies on digital screen use\",\"summary_content\":\"There have been many studies on digital screen use, showing some  __  trends. Psychologist Anne Mangen gave high-school students a short story to read, half using digital and half using print mediums. Her team then used a question-and-answer technique to find out how __  each group\'s understanding of the plot was. The findings showed a clear pattern in the responses, with those who read screens finding the order of information __ to recall.\\n\\nStudies by Ziming Liu show that students are tending to read __  words and phrases in a text to save time. This approach, she says, gives the reader a superficial understanding of the __  content of material, leaving no time for thought.\",\"suggestions\":[{\"title\":\"fast\"},{\"title\":\"isolated\"},{\"title\":\"emotional\"},{\"title\":\"worrying\"},{\"title\":\"many\"},{\"title\":\"hard\",\"answer\":null,\"option_a\":\"\",\"option_b\":\"\",\"option_c\":\"\",\"option_d\":\"\"},{\"title\":\"combined\",\"answer\":null,\"option_a\":\"\",\"option_b\":\"\",\"option_c\":\"\",\"option_d\":\"\"},{\"title\":\"thorough\",\"answer\":null,\"option_a\":\"\",\"option_b\":\"\",\"option_c\":\"\",\"option_d\":\"\"}]}', 'cle03x881004k4wkikfsqbr96'),
('cle03x88200654wkiab0uscqv', 'Yes / No / Not Given', '', 'yes-no', '{}', 'cle03x881004k4wkikfsqbr96'),
('cle03x88500944wkih70r4iwn', 'Matching Heading', '', 'matching', '{\"suggestions\":[{\"title\":\"An increasing divergence of attitudes towards Al\"},{\"title\":\"An increasing divergence of attitudes towards Al\"},{\"title\":\"An increasing divergence of attitudes towards Al\"},{\"title\":\"An increasing divergence of attitudes towards Al\"},{\"title\":\"An increasing divergence of attitudes towards Al\"},{\"title\":\"An increasing divergence of attitudes towards Al\"},{\"title\":\"An increasing divergence of attitudes towards Al\"},{\"title\":\"An increasing divergence of attitudes towards Al\"}]}', 'cle03x88400934wki7wm2bc5k'),
('cle03x88500a54wkic58d7hst', 'Single Answer', '', 'single', '{}', 'cle03x88400934wki7wm2bc5k'),
('cle03x88600ao4wkivinknpei', 'Yes / No / Not Given', '', 'yes-no', '{}', 'cle03x88400934wki7wm2bc5k');

-- --------------------------------------------------------

--
-- Table structure for table `Messages`
--

CREATE TABLE `Messages` (
  `id` varchar(191) NOT NULL,
  `senderID` varchar(191) NOT NULL,
  `isRead` tinyint(1) NOT NULL DEFAULT 0,
  `body` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `roomId` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Messages`
--

INSERT INTO `Messages` (`id`, `senderID`, `isRead`, `body`, `createdAt`, `updatedAt`, `roomId`) VALUES
('cldwi97za0006w67ovxjznwb4', 'cldwi7uyh0000w67otparf036', 0, 'hi', '2023-02-09 02:53:17.352', '2023-02-10 02:22:36.540', 'cldwi80y70004w67o88qjy85v'),
('cldwi97zb0007w67o7ipajma4', 'cldwi7uyi0002w67oa9zvzh78', 0, 'hello', '2023-02-09 02:53:17.351', '2023-02-10 02:22:36.540', 'cldwi80y70004w67o88qjy85v'),
('cldxwg7bp0000w6tgw1v5ayqs', 'cldwi7uyh0000w67otparf036', 0, 'who are u?', '2023-02-10 02:18:23.893', '2023-02-10 02:22:36.540', 'cldwi80y70004w67o88qjy85v'),
('cldxwm57s0002w6tgy4zu1sji', 'cldwi7uyi0002w67oa9zvzh78', 0, 'i\'m Nam', '2023-02-10 02:23:01.097', '2023-02-10 02:22:46.806', 'cldwi80y70004w67o88qjy85v'),
('cldxwmq5l0004w6tg81ajcrqd', 'cldwi7uyi0002w67oa9zvzh78', 0, 'I\'m your fan', '2023-02-10 02:23:28.233', '2023-02-10 02:23:02.199', 'cldwi80y70004w67o88qjy85v'),
('cldxwnoe90005w6tg2l29o19u', 'cldwi7uyi0002w67oa9zvzh78', 0, 'i want your autograph', '2023-02-10 02:24:12.609', '2023-02-10 02:23:45.078', 'cldwi80y70004w67o88qjy85v'),
('cldxwnxlq0007w6tgbpcg23vx', 'cldwi7uyh0000w67otparf036', 0, 'oh!', '2023-02-10 02:24:24.543', '2023-02-10 02:24:14.518', 'cldwi80y70004w67o88qjy85v'),
('cldxwodtg0008w6tggoahkmkx', 'cldwi7uyh0000w67otparf036', 0, 'Of course', '2023-02-10 02:24:45.557', '2023-02-10 02:24:39.262', 'cldwi80y70004w67o88qjy85v'),
('cldy5xra60009w67of5bg5oj6', 'cldwi7uyi0002w67oa9zvzh78', 0, 'any', '2023-02-10 06:43:59.451', '2023-02-10 06:43:59.451', 'cldwi80y70004w67o88qjy85v'),
('cldy62jhi000aw67onp4398uf', 'cldwi7uyi0002w67oa9zvzh78', 0, 'how ?', '2023-02-10 06:47:42.630', '2023-02-10 06:47:42.630', 'cldwi80y70004w67o88qjy85v'),
('cldy653z4000bw67ouownxyh1', 'cldwi7uyi0002w67oa9zvzh78', 0, 'hihi', '2023-02-10 06:49:42.496', '2023-02-10 06:49:42.496', 'cldwi80y70004w67o88qjy85v'),
('cldy66ym0000cw67o2hc4bvcb', 'cldwi7uyi0002w67oa9zvzh78', 0, 'asdf', '2023-02-10 06:51:08.856', '2023-02-10 06:51:08.856', 'cldwi80y70004w67o88qjy85v'),
('cldy67e2a000ew67o1f9jnf9t', 'cldwi7uyh0000w67otparf036', 0, 'as', '2023-02-10 06:51:28.882', '2023-02-10 06:51:28.882', 'cldwi80y70004w67o88qjy85v'),
('cldy67og1000fw67oeh4hstb3', 'cldwi7uyi0002w67oa9zvzh78', 0, 'a', '2023-02-10 06:51:42.338', '2023-02-10 06:51:42.338', 'cldwi80y70004w67o88qjy85v'),
('cldy68l41000gw67oq9dhooj3', 'cldwi7uyi0002w67oa9zvzh78', 0, 'asdffss', '2023-02-10 06:52:24.674', '2023-02-10 06:52:24.674', 'cldwi80y70004w67o88qjy85v'),
('cldy68r4o000hw67ooev2g4ob', 'cldwi7uyh0000w67otparf036', 0, 'fsd', '2023-02-10 06:52:32.473', '2023-02-10 06:52:32.473', 'cldwi80y70004w67o88qjy85v'),
('cldy68v41000jw67or1rqd35w', 'cldwi7uyh0000w67otparf036', 0, 'a', '2023-02-10 06:52:37.634', '2023-02-10 06:52:37.634', 'cldwi80y70004w67o88qjy85v'),
('cldy6jna8000kw67on4ah9ob4', 'cldwi7uyi0002w67oa9zvzh78', 0, 'a', '2023-02-10 07:01:00.704', '2023-02-10 07:01:00.704', 'cldwi80y70004w67o88qjy85v'),
('cldy6ke3j000lw67o9a1h2ac1', 'cldwi7uyi0002w67oa9zvzh78', 0, 'a', '2023-02-10 07:01:35.456', '2023-02-10 07:01:35.456', 'cldwi80y70004w67o88qjy85v'),
('cldy6ksoz000mw67otnvr70g2', 'cldwi7uyh0000w67otparf036', 0, 'b', '2023-02-10 07:01:54.372', '2023-02-10 07:01:54.372', 'cldwi80y70004w67o88qjy85v'),
('cldy6ncsr000nw67o9gxvndpu', 'cldwi7uyi0002w67oa9zvzh78', 0, 'ok', '2023-02-10 07:03:53.739', '2023-02-10 07:03:53.739', 'cldwi80y70004w67o88qjy85v'),
('cldy6nh81000ow67oa8kp8ic3', 'cldwi7uyh0000w67otparf036', 0, 'not ok', '2023-02-10 07:03:59.474', '2023-02-10 07:03:59.474', 'cldwi80y70004w67o88qjy85v'),
('cldy6o74b000pw67ox6k08uo1', 'cldwi7uyi0002w67oa9zvzh78', 0, 'fasdfasdf', '2023-02-10 07:04:33.035', '2023-02-10 07:04:33.035', 'cldwi80y70004w67o88qjy85v'),
('cldzgmfcp0001w684ep44o0kz', 'cldwi7uyi0002w67oa9zvzh78', 0, 'fsadfasdf', '2023-02-11 04:30:52.689', '2023-02-11 04:30:52.689', 'cldwi80y70004w67o88qjy85v'),
('cldzgmqsn0002w684v91n3bud', 'cldwi7uyi0002w67oa9zvzh78', 0, 'fasd', '2023-02-11 04:31:07.559', '2023-02-11 04:31:07.559', 'cldwi80y70004w67o88qjy85v'),
('cldzgmxgk0003w684x04n01t2', 'cldwi7uyi0002w67oa9zvzh78', 0, '41234', '2023-02-11 04:31:16.197', '2023-02-11 04:31:16.197', 'cldwi80y70004w67o88qjy85v'),
('cldzhwskb0004w684gr72svsr', 'cldwi7uyh0000w67otparf036', 0, '??', '2023-02-11 05:06:56.027', '2023-02-11 05:06:56.027', 'cldwi80y70004w67o88qjy85v'),
('cldzmu9980006w684dhunonu8', 'cldwi7uyh0000w67otparf036', 0, '321123', '2023-02-11 07:24:55.736', '2023-02-11 07:24:55.736', 'cldwi80y70004w67o88qjy85v'),
('cldzmufkx0007w6848vw478fs', 'cldwi7uyh0000w67otparf036', 0, 'ok', '2023-02-11 07:25:03.970', '2023-02-11 07:25:03.970', 'cldwi80y70004w67o88qjy85v'),
('cldzmv0fz0009w684ix8v43vz', 'cldwi7uyi0002w67oa9zvzh78', 0, 'fsd', '2023-02-11 07:25:31.008', '2023-02-11 07:25:31.008', 'cldwi80y70004w67o88qjy85v'),
('cldzmw5jr000bw684s1brbyg8', 'cldwi7uyh0000w67otparf036', 0, '123', '2023-02-11 07:26:24.280', '2023-02-11 07:26:24.280', 'cldwi80y70004w67o88qjy85v'),
('cldzmwej1000cw684r0wu8o1f', 'cldwi7uyh0000w67otparf036', 0, 'a', '2023-02-11 07:26:35.917', '2023-02-11 07:26:35.917', 'cldwi80y70004w67o88qjy85v'),
('cldzmwrvi000dw6842yujocme', 'cldwi7uyh0000w67otparf036', 0, '1', '2023-02-11 07:26:53.214', '2023-02-11 07:26:53.214', 'cldwi80y70004w67o88qjy85v'),
('cldzmwzcm000ew684t7rnkgwr', 'cldwi7uyh0000w67otparf036', 0, '2', '2023-02-11 07:27:02.902', '2023-02-11 07:27:02.902', 'cldwi80y70004w67o88qjy85v'),
('cldzmzny3000gw6843iptx1li', 'cldwi7uyh0000w67otparf036', 0, 'a', '2023-02-11 07:29:08.092', '2023-02-11 07:29:08.092', 'cldwi80y70004w67o88qjy85v'),
('cldzpc4a8000hw684qn0upr6u', 'cldwi7uyh0000w67otparf036', 0, 'a', '2023-02-11 08:34:48.369', '2023-02-11 08:34:48.369', 'cldwi80y70004w67o88qjy85v'),
('cldzpmzjq000jw6847msufbba', 'cldwi7uyh0000w67otparf036', 0, '432', '2023-02-11 08:43:15.446', '2023-02-11 08:43:15.446', 'cldwi80y70004w67o88qjy85v'),
('cldzpn771000lw684ko1gr09n', 'cldwi7uyh0000w67otparf036', 0, '321', '2023-02-11 08:43:25.357', '2023-02-11 08:43:25.357', 'cldwi80y70004w67o88qjy85v'),
('cldzpnev4000mw684c5m7zaqz', 'cldwi7uyh0000w67otparf036', 0, '435', '2023-02-11 08:43:35.296', '2023-02-11 08:43:35.296', 'cldwi80y70004w67o88qjy85v'),
('cldzpntax000ow684xr59mk1m', 'cldwi7uyh0000w67otparf036', 0, '43', '2023-02-11 08:43:54.010', '2023-02-11 08:43:54.010', 'cldwi80y70004w67o88qjy85v'),
('cle250uig0003w6scw6ad5l1l', 'cle24zwyl0000w640gil9q0e7', 0, 'asdf', '2023-02-13 01:29:28.697', '2023-02-13 01:29:28.697', 'cle250pya0000w6scsneqqrgj'),
('cle251h6h0005w6sccv1jyl7s', 'cldwi7uyh0000w67otparf036', 0, 'hi', '2023-02-13 01:29:58.073', '2023-02-13 01:29:58.073', 'cle250pya0000w6scsneqqrgj'),
('cle25cmik0006w6sc9jk8ql9k', 'cle24zwyl0000w640gil9q0e7', 0, 'hi', '2023-02-13 01:38:38.204', '2023-02-13 01:38:38.204', 'cle250pya0000w6scsneqqrgj'),
('cle25dtz40008w6sc9draena9', 'cldwi7uyh0000w67otparf036', 0, 'hi', '2023-02-13 01:39:34.528', '2023-02-13 01:39:34.528', 'cle250pya0000w6scsneqqrgj'),
('cle25eyo00009w6scogmp66hl', 'cldwi7uyh0000w67otparf036', 0, 'a', '2023-02-13 01:40:27.263', '2023-02-13 01:40:27.263', 'cle250pya0000w6scsneqqrgj'),
('cle25g2r0000aw6scyhxog172', 'cldwi7uyh0000w67otparf036', 0, 'a', '2023-02-13 01:41:19.212', '2023-02-13 01:41:19.212', 'cle250pya0000w6scsneqqrgj'),
('cle25g6z2000bw6sccf5vba6i', 'cldwi7uyh0000w67otparf036', 0, 'b', '2023-02-13 01:41:24.687', '2023-02-13 01:41:24.687', 'cle250pya0000w6scsneqqrgj'),
('cle25gqpz000cw6sc5uyl3jfs', 'cldwi7uyh0000w67otparf036', 0, 'b', '2023-02-13 01:41:50.279', '2023-02-13 01:41:50.279', 'cle250pya0000w6scsneqqrgj'),
('cle25guix000dw6scpz75a1ou', 'cldwi7uyh0000w67otparf036', 0, 's', '2023-02-13 01:41:55.209', '2023-02-13 01:41:55.209', 'cle250pya0000w6scsneqqrgj'),
('cle25gwh6000ew6scfw9wg43b', 'cle24zwyl0000w640gil9q0e7', 0, 'a', '2023-02-13 01:41:57.738', '2023-02-13 01:41:57.738', 'cle250pya0000w6scsneqqrgj'),
('cle25jktc000fw6scjssa11eg', 'cldwi7uyh0000w67otparf036', 0, 'a', '2023-02-13 01:44:02.592', '2023-02-13 01:44:02.592', 'cle250pya0000w6scsneqqrgj'),
('cle25jrjq000hw6scua9emn38', 'cldwi7uyh0000w67otparf036', 0, 'a', '2023-02-13 01:44:11.318', '2023-02-13 01:44:11.318', 'cle250pya0000w6scsneqqrgj'),
('cle25ju71000iw6sclzf7413h', 'cldwi7uyh0000w67otparf036', 0, 'b', '2023-02-13 01:44:14.750', '2023-02-13 01:44:14.750', 'cle250pya0000w6scsneqqrgj'),
('cle25jxjm000kw6scu8qc0j5k', 'cle24zwyl0000w640gil9q0e7', 0, 'a', '2023-02-13 01:44:19.091', '2023-02-13 01:44:19.091', 'cle250pya0000w6scsneqqrgj'),
('cle25kxs9000lw6scvdyo0iph', 'cldwi7uyi0002w67oa9zvzh78', 0, '??', '2023-02-13 01:45:06.057', '2023-02-13 01:45:06.057', 'cldwi80y70004w67o88qjy85v'),
('cle25l4pn000nw6sccogyckbb', 'cldwi7uyh0000w67otparf036', 0, 'b', '2023-02-13 01:45:15.035', '2023-02-13 01:45:15.035', 'cle250pya0000w6scsneqqrgj'),
('cle25l95p000pw6sc33h6vznl', 'cle24zwyl0000w640gil9q0e7', 0, '??', '2023-02-13 01:45:20.797', '2023-02-13 01:45:20.797', 'cle250pya0000w6scsneqqrgj'),
('cle25lc5t000qw6sc39slzvv3', 'cldwi7uyi0002w67oa9zvzh78', 0, 'alo', '2023-02-13 01:45:24.689', '2023-02-13 01:45:24.689', 'cldwi80y70004w67o88qjy85v'),
('cle25wf8x000rw6scttv66tca', 'cldwi7uyh0000w67otparf036', 0, 'flkajsdlkf', '2023-02-13 01:54:01.905', '2023-02-13 01:54:01.905', 'cle250pya0000w6scsneqqrgj'),
('cle25whgx000sw6sct3uli7rl', 'cle24zwyl0000w640gil9q0e7', 0, 'fsadf', '2023-02-13 01:54:04.786', '2023-02-13 01:54:04.786', 'cle250pya0000w6scsneqqrgj'),
('cle25wp24000vw6sc8llw5oo1', 'cldwi7uyi0002w67oa9zvzh78', 0, 'fads', '2023-02-13 01:54:14.620', '2023-02-13 01:54:14.620', 'cldwi80y70004w67o88qjy85v'),
('cle2gfipf00014wpjrgfrdgis', 'cldwi7uyi0002w67oa9zvzh78', 0, 'asd', '2023-02-13 06:48:49.011', '2023-02-13 06:48:49.011', 'cldwi80y70004w67o88qjy85v'),
('cle2gh0u300034wpjtgqq4hcn', 'cldwi7uyi0002w67oa9zvzh78', 0, '123', '2023-02-13 06:49:59.163', '2023-02-13 06:49:59.163', 'cldwi80y70004w67o88qjy85v'),
('cle2ghkue00044wpj6ld87vst', 'cldwi7uyi0002w67oa9zvzh78', 0, '12', '2023-02-13 06:50:25.094', '2023-02-13 06:50:25.094', 'cldwi80y70004w67o88qjy85v');

-- --------------------------------------------------------

--
-- Table structure for table `Passages`
--

CREATE TABLE `Passages` (
  `id` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `content` text NOT NULL,
  `quiz_id` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Passages`
--

INSERT INTO `Passages` (`id`, `title`, `content`, `quiz_id`) VALUES
('cle03x87o00014wkip0ygovc8', 'passage 0', '<h3><strong>Roman tunnels</strong></h3>\n<p><strong>The Romans, who once controlled areas of Europe, North Africa and Asia Minor, adopted the construction techniques of other civilizations to build tunnels in their territories</strong></p>\n<p>The Persians, who lived in present-day Iran, were one of the first civilizations to build tunnels &nbsp;that provided a reliable supply of water to human settlements in dry areas. In the early first millennium BCE, they introduced the qanat method of tunnel construction, which consisted of placing posts over a hill in a straight line, to ensure that the tunnel kept to its route, and then digging vertical shafts down into the ground at regular intervals. Underground, workers removed the earth from between the ends of the shafts, creating a tunnel. The excavated soil was taken up to the surface using the shafts, which also provided ventilation during the work. Once the tunnel was completed, it allowed water to flow from the top of a hillside down towards a canal, which supplied water for human use. Remarkably, some qanats built by the Persians 2,700 years ago are still in use today.</p>\n<p>They later passed on their knowledge to the Romans, who also used the qanat method to construct water-supply tunnels for agriculture. Roman qanat tunnels were constructed with vertical shafts dug at intervals of between 30 and 60 meters. The shafts were equipped with handholds and footholds to help those climbing in and out of them and were covered with a wooden or stone lid. To ensure that the shafts were vertical, Romans hung a plumb line from a rod placed across the top of each shaft and made sure that the weight at the end of it hung in the center of the shaft. Plumb lines were also used to measure the depth of the shaft and to determine the slope of the tunnel. The 5.6-kilometer-long Claudius tunnel, built in 41 CE to drain the Fucine Lake in central Italy, had shafts that were up to 122 meters deep, took 11 years to build and involved approximately 30,000 workers.</p>\n<p>By the 6th century BCE, a second method of tunnel construction appeared called the counter-excavation method, in which the tunnel was constructed from both ends. It was used to cut through high mountains when the qanat method was not a practical alternative. This method required greater planning and advanced knowledge of surveying, mathematics and geometry as both ends of a tunnel had to meet correctly at the center of the mountain. Adjustments to the direction of the tunnel also had to be made whenever builders encountered geological problems or when it deviated from its set path. They constantly checked the tunnel\'s advancing direction,<br>for example, by looking back at the light that penetrated through the tunnel mouth, and made corrections whenever necessary. Large deviations could happen, and they could result in one end of the tunnel not being usable. An inscription written on the side of a 428-meter tunnel, built by the Romans as part of the Saldae aqueduct system in modern-day Algeria, describes how the two teams of builders missed each other in the mountain and how the later construction of a lateral link between both corridors corrected the initial error.</p>\n<p>The Romans dug tunnels for their roads using the counter-excavation method, whenever they encountered obstacles such as hills or mountains that were too high for roads to pass over. An example is the 37-meter-long, 6-meter-high, Furlo Pass Tunnel built in Italy in 69-79 CE. Remarkably, a modern road still uses this tunnel today. Tunnels were also built for mineral extraction. Miners would locate a mineral vein and then pursue it with shafts and tunnels underground. Traces of such tunnels used to mine gold can still be found at the Dolaucothi mines in Wales. When the sole purpose of a tunnel was mineral extraction, construction required less planning, as the tunnel route was determined by the mineral vein.</p>\n<p>Roman tunnel projects were carefully planned and carried out. The length of time it took to construct a tunnel depended on the method being used and the type of rock being excavated. The qanat construction method was usually faster than the counter-excavation method as it was more straightforward. This was because the mountain could be excavated not only from the tunnel mouths but also from shafts. The type of rock could also influence construction times. When the rock was hard, the Romans employed a technique called fire quenching which consisted of heating the rock with fire, and then suddenly cooling it with cold water so that it would crack. Progress through hard rock could be very slow, and it was not uncommon for tunnels to take years, if not decades, to be built. Construction marks left on a Roman tunnel in Bologna show that the rate of advance through solid rock was 30 centimeters per day. In contrast, the rate of advance of the Claudius tunnel can be calculated at 1.4 meters per day. Most tunnels had inscriptions showing the names of patrons who ordered construction and sometimes the name of the architect. For example, the 1.4-kilometer &Ccedil;evlik tunnel in Turkey, built to divert the floodwater threatening the harbor of the ancient city of Seleuceia Pieria, had inscriptions on the entrance, still visible today, that also indicate that the tunnel was started in 69 CE and was completed in 81 CE.</p>', 'cle03x87m00004wkiajyn9y80'),
('cle03x881004k4wkikfsqbr96', 'passage 1', '<h3><strong>Changes in reading habits</strong></h3>\n<p><strong>What are the implications of the way we read today?</strong></p>\n<p>Look around on your next plane trip. The iPad is the new pacifier for babies and toddlers. Younger school-aged children read stories on smartphones, older kids don\'t read at all, but hunch over video games. Parents and other passengers read on tablets or skim a flotilla of email and news feeds. Unbeknown to most of us, an invisible, game-changing transformation links everyone in this picture: the neuronal circuit that underlies the brain\'s ability to read is subtly, rapidly changing and this has implications for everyone from the pre-reading toddler to the expert adult.</p>\n<p>As work in neurosciences indicates, the acquisition of literacy necessitated a new circuit in our species\' brain more than 6,000 years ago. That circuit evolved from a very simple mechanism for decoding basic information, like the number of goats in one\'s herd, to the present, highly elaborated reading brain. My research depicts how the present reading brain enables the development of some of our most important intellectual and affective processes: internalized knowledge, analogical reasoning, and inference; perspective-taking and empathy; critical analysis and the generation of insight. Research surfacing in many parts of the world now cautions that each of these essential \'deep reading processes may be under threat as we move into digital-based modes of reading.</p>\n<p>This is not a simple, binary issue of print versus digital reading and technological innovation. As MIT scholar Sherry Turkle has written, we do not err as a society when we innovate but when we ignore what we disrupt or diminish while innovating. In this hinge moment between print and digital cultures, society needs to confront what is diminishing in the expert reading circuit, what our children and older students are not developing, and what we can do about it.</p>\n<p>We know from research that the reading circuit is not given to human beings through a genetic blueprint like vision or language; it needs an environment to develop. Further, it will adapt to that environment\'s requirements - from different writing systems to the characteristics of whatever medium is used. If the dominant medium advantages processes that are fast, multi-task oriented and well-suited for large volumes of information, like the current digital medium, so will the reading circuit. As UCLA psychologist Patricia Greenfield writes, the result is that less attention and time will be allocated to slower, time-demanding deep reading processes.</p>\n<p>Increasing reports from educators and from researchers in psychology and the humanities bear this out. English literature scholar and teacher Mark Edmundson describes how many college students actively avoid the classic literature of the 19th and 20th centuries in favour of something simpler as they no longer have the patience to read longer, denser, more difficult texts. We should be less concerned with students\' cognitive impatience\', however, than by what may underlie it: the potential inability of large numbers of students to read with a level of critical analysis sufficient to comprehend the complexity of thought and argument found in more demanding texts.</p>\n<p>Multiple studies show that digital screen use may be causing a variety of troubling downstream effects on reading comprehension in older high school and college students. In Stavanger, Norway, psychologist Anne Mangen and her colleagues studied how high school students comprehend the same material in different mediums. Mangen\'s group asked subjects questions about a short story whose plot had universal student appeal; half of the students read the story on a tablet, the other half in paperback. Results indicated that students who read on print were superior in their comprehension to screen-reading peers, particularly in their ability to sequence detail and reconstruct the plot in chronological order.</p>\n<p>Ziming Liu from San Jose State University has conducted a series of studies which indicate that the &ldquo;new norm\' in reading is skimming, involving word-spotting and browsing through the text. Many readers now use a pattern when reading in which they sample the first line and then word spot through the rest of the text. When the reading brain skims like this, it reduces time allocated to deep reading processes. In other words, we don\'t have time to grasp complexity, to understand another\'s feelings, to perceive beauty, and to create thoughts of the reader\'s own.</p>\n<p>The possibility that critical analysis, empathy and other deep reading processes could become the unintended collateral damage of our digital culture is not a straightforward binary issue about print versus digital reading. It is about how we all have begun to read on various mediums and how that changes not only what we read, but also the purposes for which we read. Nor is it only about the young. The subtle atrophy of critical analysis and empathy affects us all equally. It affects our ability to navigate a constant bombardment of information. It incentivizes a retreat to the most familiar stores of unchecked information, which require and receive no analysis, leaving us susceptible to false information and irrational ideas.</p>\n<p>There\'s an old rule in neuroscience that does not alter with age: use it or lose it. It is a very hopeful principle when applied to critical thought in the reading brain because it implies choice. The story of the changing reading brain is hardly finished. We possess both the science and the technology to identify and redress the changes in how we read before they become entrenched. If we work to understand exactly what we will lose, alongside the extraordinary new capacities that the digital world has brought us, there is as much reason for excitement as caution.</p>', 'cle03x87m00004wkiajyn9y80'),
('cle03x88400934wki7wm2bc5k', 'passage 2', '<h3><strong>Attitudes towards Artificial Intelligence</strong></h3>\n<p><span style=\"font-size: 24pt;\"><strong>A.</strong></span> Artificial intelligence (AI) can already predict the future. Police forces are using it to map when and where crime is likely to occur. Doctors can use it to predict when a patient is most likely to have a heart attack or stroke. Researchers are even trying to give AI imagination so it can plan for unexpected consequences.</p>\n<p>Many decisions in our lives require a good forecast, and AI is almost always better at forecasting than we are. Yet for all these technological advances, we still seem to deeply lack confidence in AI predictions. Recent cases show that people don\'t like relying on AI and prefer to trust human experts, even if these experts are wrong.</p>\n<p>If we want AI to really benefit people, we need to find a way to get people to trust it. To do that, we need to understand why people are so reluctant to trust AI in the first place.&nbsp;<br><span style=\"font-size: 24pt;\"><strong>B. </strong></span>Take the case of Watson for Oncology, one of technology giant IBM\'s supercomputer programs. Their attempt to promote this program to cancer doctors was a PR disaster. The AI promised to deliver top-quality recommendations on the treatment of 12 cancers that accounted for 80% of the world\'s cases. But when doctors first interacted with Watson, they found themselves in a rather difficult situation. On the one hand, if Watson provided guidance about a treatment that coincided with their own opinions, physicians did not see much point in Watson\'s recommendations. The supercomputer was simply telling them what they already knew, and these recommendations did not change the actual treatment.&nbsp;</p>\n<p>On the other hand, if Watson generated a recommendation that contradicted the experts\' opinion, doctors would typically conclude that Watson wasn\'t competent. And the machine wouldn\'t be able to explain why its treatment was plausible because its machine-learning algorithms were simply too complex to be fully understood by humans. Consequently, this has caused even more suspicion and disbelief, leading many doctors to ignore the seemingly outlandish AI recommendations and stick to their own expertise.<br><span style=\"font-size: 24pt;\"><strong>C. </strong></span>This is just one example of people\'s lack of confidence in AI and their reluctance to accept what Al has to offer. Trust in other people is often based on our understanding of how others think and having experience of their reliability. This helps create a psychological feeling of safety. Al, on the other hand, is still fairly new and unfamiliar to most people. Even if it can be technically explained (and that\'s not always the case), AI\'s decision-making process is usually too difficult for most people to comprehend. And interacting with something we don\'t understand can cause anxiety and give us a sense that we\'re losing control.</p>\n<p>Many people are also simply not familiar with many instances of AI actually working, because it often happens in the background. Instead, they are acutely aware of instances where AI goes wrong. Embarrassing AI failures receive a disproportionate amount of media attention, emphasising the message that we cannot rely on technology. Machine learning is not foolproof, in part because the humans who design it aren\'t.<br><span style=\"font-size: 24pt;\"><strong>D. </strong></span>Feelings about AI run deep. In a recent experiment, people from a range of backgrounds were given various sci-fi films about AI to watch and then asked questions about automation in everyday life. It was found that, regardless of whether the film they watched depicted Al in a positive or negative light, simply watching a cinematic vision of our technological future polarised the participants\' attitudes. Optimists became more extreme in their enthusiasm for AI and sceptics became even more guarded.</p>\n<p>This suggests people use relevant evidence about AI in a biased manner to support their existing attitudes, a deep-rooted human tendency known as &ldquo;confirmation bias&rdquo;. As Al is represented more and more in media and entertainment, it could lead to a society split between those who benefit from AI and those who reject it. More pertinently, refusing to accept the advantages offered by AI could place a large group of people at a serious disadvantage.<br><span style=\"font-size: 24pt;\"><strong>E. </strong></span>Fortunately, we already have some ideas about how to improve trust in AI. Simply having previous experience with AI can significantly improve people\'s opinions about the technology, as was found in the study mentioned above. Evidence also suggests the more you use other technologies such as the internet, the more you trust them.</p>\n<p>Another solution may be to reveal more about the algorithms which Al uses and the purposes they serve. Several high-profile social media companies and online marketplaces already release transparency reports about government requests and surveillance disclosures. A similar practice for AI could help people have a better understanding of the way algorithmic decisions are made.<br><span style=\"font-size: 24pt;\"><strong>F. </strong></span>Research suggests that allowing people some control over AI decision-making could also improve trust and enable AI to learn from human experience. For example, one study showed that when people were allowed the freedom to slightly modify an algorithm, they felt more satisfied with its decisions, more likely to believe it was superior and more likely to use it in the future.</p>\n<p>We don\'t need to understand the intricate inner workings of AI systems, but if people are given a degree of responsibility for how they are implemented, they will be more willing to accept Al into their lives.</p>', 'cle03x87m00004wkiajyn9y80');

-- --------------------------------------------------------

--
-- Table structure for table `Questions`
--

CREATE TABLE `Questions` (
  `id` varchar(191) NOT NULL,
  `question_name` varchar(191) DEFAULT NULL,
  `option_a` varchar(191) DEFAULT NULL,
  `option_b` varchar(191) DEFAULT NULL,
  `option_c` varchar(191) DEFAULT NULL,
  `option_d` varchar(191) DEFAULT NULL,
  `group_question_id` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Questions`
--

INSERT INTO `Questions` (`id`, `question_name`, `option_a`, `option_b`, `option_c`, `option_d`, `group_question_id`) VALUES
('cle03x87x00034wki3dahn7xe', '__  to direct the tunnelling', '', '', '', '', 'cle03x87u00024wkigrwe11ft'),
('cle03x87y00064wkixrl3emkp', 'water runs into a __  used by local people', '', '', '', '', 'cle03x87u00024wkigrwe11ft'),
('cle03x87y00094wki059evjsm', 'vertical shafts to remove earth and for __', '', '', '', '', 'cle03x87u00024wkigrwe11ft'),
('cle03x87y000c4wkitemn4pj3', '__  made of wood or stone', '', '', '', '', 'cle03x87u00024wkigrwe11ft'),
('cle03x87y000f4wkiwqbycxor', '__ attached to the plumb line', '', '', '', '', 'cle03x87u00024wkigrwe11ft'),
('cle03x87y000i4wkiyhfhurzw', 'handholds and footholds used for  __', '', '', '', '', 'cle03x87u00024wkigrwe11ft'),
('cle03x87y00144wkind0ck9lb', 'The counter-excavation method completely replaced the qanat method in the 6th century BCE.', '', '', '', '', 'cle03x87y00134wki03bizjh6'),
('cle03x87y00174wkin2n3412d', 'Only experienced builders were employed to construct a tunnel using the counter-excavation method.', '', '', '', '', 'cle03x87y00134wki03bizjh6'),
('cle03x87y001a4wkiu3p5k54w', 'The information about a problem that occurred during the construction of the Saldae aqueduct system was found in an ancient book.', '', '', '', '', 'cle03x87y00134wki03bizjh6'),
('cle03x87y001d4wkigd7c3y0c', 'The mistake made by the builders of the Saldae aqueduct system was that the two parts of the tunnel failed to meet.', '', '', '', '', 'cle03x87y00134wki03bizjh6'),
('cle03x87z001t4wkiz0dhzh2c', 'What type of mineral were the Dolaucothi mines in Wales built to extract? ', '', '', '', '', 'cle03x87z001s4wkihhbi97am'),
('cle03x87z001w4wkiunvg4oqs', 'In addition to the patron, whose name might be carved onto a tunnel? ', '', '', '', '', 'cle03x87z001s4wkihhbi97am'),
('cle03x87z001z4wkivkka9w4g', 'What part of Seleuceia Pieria was the Çevlik tunnel built to protect?', '', '', '', '', 'cle03x87z001s4wkihhbi97am'),
('cle03x881004m4wkiewnmo9y4', 'What is the writer\'s main point in the first paragraph?', 'Our use of technology is having a hidden effect on us.', 'Technology can be used to help youngsters to read.', 'Travellers should be encouraged to use technology on planes.', 'Playing games is a more popular use of technology than reading.', 'cle03x881004l4wkin16n7ts4'),
('cle03x881004p4wkiikcrv7bf', 'What main point does Sherry Turkle make about innovation?', 'Technological innovation has led to a reduction in print reading.', 'We should pay attention to what might be lost when innovation occurs.', 'We should encourage more young people to become involved in innovation.', 'There is a difference between developing products and developing ideas.', 'cle03x881004l4wkin16n7ts4'),
('cle03x881004s4wkiwirpst1h', 'What point is the writer making in the fourth paragraph?', 'Humans have an inborn ability to read and write.', 'Reading can be done using many different mediums.', 'Writing systems make unexpected demands on the brain.', 'Some brain circuits adjust to whatever is required of them.', 'cle03x881004l4wkin16n7ts4'),
('cle03x881004v4wkine699qs5', 'According to Mark Edmundson, the attitude of college students', 'has changed the way he teaches.', 'has influenced what they select to read.', 'does not worry him as much as it does others.', 'does not match the views of the general public.', 'cle03x881004l4wkin16n7ts4'),
('cle03x882005b4wkibkgcfqbg', '', '', '', '', '', 'cle03x881005a4wki9qa1fhob'),
('cle03x882005e4wkikloh75x7', '', '', '', '', '', 'cle03x881005a4wki9qa1fhob'),
('cle03x882005h4wkikrsygmb1', '', '', '', '', '', 'cle03x881005a4wki9qa1fhob'),
('cle03x882005k4wkijdvhk1in', '', '', '', '', '', 'cle03x881005a4wki9qa1fhob'),
('cle03x882005n4wki3fj462i4', '', '', '', '', '', 'cle03x881005a4wki9qa1fhob'),
('cle03x88200664wkizeiitatm', 'The medium we use to read can affect our choice of reading content.', '', '', '', '', 'cle03x88200654wkiab0uscqv'),
('cle03x88200694wki3gftcskj', 'Some age groups are more likely to lose their complex reading skills than others.', '', '', '', '', 'cle03x88200654wkiab0uscqv'),
('cle03x882006c4wkimovxear5', 'False information has become more widespread in today\'s digital era.', '', '', '', '', 'cle03x88200654wkiab0uscqv'),
('cle03x882006f4wkifwd85u5x', 'We still have opportunities to rectify the problems that technology is presenting.', '', '', '', '', 'cle03x88200654wkiab0uscqv'),
('cle03x88500954wkiuhgz9iha', '', '', '', '', '', 'cle03x88500944wkih70r4iwn'),
('cle03x88500984wkibjqqocgm', '', '', '', '', '', 'cle03x88500944wkih70r4iwn'),
('cle03x885009b4wki6gqge4ts', '', '', '', '', '', 'cle03x88500944wkih70r4iwn'),
('cle03x885009e4wkiwrq2pk82', '', '', '', '', '', 'cle03x88500944wkih70r4iwn'),
('cle03x885009h4wkifkjkfqlf', '', '', '', '', '', 'cle03x88500944wkih70r4iwn'),
('cle03x885009k4wkinlvxqwe0', '', '', '', '', '', 'cle03x88500944wkih70r4iwn'),
('cle03x88500a64wkivft4zjyc', 'What is the writer doing in Section A?', 'providing a solution to a concern', 'justifying an opinion about an issue', 'highlighting the existence of a problem', 'explaining the reasons for a phenomenon', 'cle03x88500a54wkic58d7hst'),
('cle03x88500a94wkipiszw6g9', 'According to Section C, why might some people be reluctant to accept AI?', 'They are afraid it will replace humans in decision-making jobs.', 'Its complexity makes them feel that they are at a disadvantage.', 'They would rather wait for the technology to be tested over a period of time.', 'Misunderstandings about how it works make it seem more challenging than it is.', 'cle03x88500a54wkic58d7hst'),
('cle03x88500ac4wkiz2tviz2t', 'What does the writer say about the media in Section C of the text?', 'It leads the public to be mistrustful of Al.', 'It devotes an excessive amount of attention to Al.', 'Its reports of incidents involving Al are often inaccurate.', 'It gives the impression that Al failures are due to designer error.', 'cle03x88500a54wkic58d7hst'),
('cle03x88600ap4wkipgl0x8bw', 'Subjective depictions of Al in sci-fi films make people change their opinions about automation.', '', '', '', '', 'cle03x88600ao4wkivinknpei'),
('cle03x88600as4wkiv28lj1nu', 'Portrayals of Al in media and entertainment are likely to become more positive.', '', '', '', '', 'cle03x88600ao4wkivinknpei'),
('cle03x88600av4wkie7ro9mzc', ' Rejection of the possibilities of Al may have a negative effect on many people\'s lives. ', '', '', '', '', 'cle03x88600ao4wkivinknpei'),
('cle03x88600ay4wki2jao5vx0', 'Familiarity with Al has very little impact on people\'s attitudes to the technology.', '', '', '', '', 'cle03x88600ao4wkivinknpei'),
('cle03x88600b14wkigffv3i2b', 'Al applications which users are able to modify are more likely to gain consumer approval.', '', '', '', '', 'cle03x88600ao4wkivinknpei');

-- --------------------------------------------------------

--
-- Table structure for table `Quizzes`
--

CREATE TABLE `Quizzes` (
  `id` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `work_time` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Quizzes`
--

INSERT INTO `Quizzes` (`id`, `title`, `slug`, `work_time`) VALUES
('cle03x87m00004wkiajyn9y80', 'CAM16 - Reading Test 4', 'ielts-online-test-luyen-tap-cambridge-ielts-16-test-4-reading', '1970-01-01 01:00:00.000');

-- --------------------------------------------------------

--
-- Table structure for table `Rooms`
--

CREATE TABLE `Rooms` (
  `id` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Rooms`
--

INSERT INTO `Rooms` (`id`) VALUES
('cldwi80y70004w67o88qjy85v'),
('cle250pya0000w6scsneqqrgj'),
('cle25wnc3000tw6sctym1mmk5');

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) DEFAULT NULL,
  `email` varchar(191) DEFAULT NULL,
  `emailVerified` datetime(3) DEFAULT NULL,
  `image` varchar(191) DEFAULT NULL,
  `password` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`id`, `name`, `email`, `emailVerified`, `image`, `password`) VALUES
('cldwi7uyh0000w67otparf036', 'Việt Hùng', 'viet.hung.2898@gmail.com', NULL, 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80', '$2a$12$DdT8mLJ0HE.ll0idvi.8XOpgnVtJ5ciY2/tfKfdMS1HmGIDceG6Zi'),
('cldwi7uyi0002w67oa9zvzh78', 'Nam', 'nam@gmail.com', NULL, 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80', '$2a$12$6EvjtlL37zDnIQddB4QZHOk1KF6IIvX2EPq81Fb.ACbRb/BIc57Le'),
('cle24zwyl0000w640gil9q0e7', 'Nữ', 'nu@gmail.com', NULL, 'https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg', '$2a$12$6EvjtlL37zDnIQddB4QZHOk1KF6IIvX2EPq81Fb.ACbRb/BIc57Le');

-- --------------------------------------------------------

--
-- Table structure for table `VerificationToken`
--

CREATE TABLE `VerificationToken` (
  `identifier` varchar(191) NOT NULL,
  `token` varchar(191) NOT NULL,
  `expires` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `VerificationToken`
--

INSERT INTO `VerificationToken` (`identifier`, `token`, `expires`) VALUES
('cldwi7uyh0000w67otparf036', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsZHdpN3V5aDAwMDB3NjdvdHBhcmYwMzYiLCJpYXQiOjE2Nzg3ODQxMTgsImV4cCI6MTY3ODg3MDUxOH0.1VjUf5oe50bt0psdDGufuj5MNYblbLNP-UR784dKiRc', '2023-03-15 08:55:18.751'),
('cldwi7uyh0000w67otparf036', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsZHdpN3V5aDAwMDB3NjdvdHBhcmYwMzYiLCJpYXQiOjE2NzU5MTEyOTMsImV4cCI6MTY3NTk5NzY5M30.ntaeGgHTUz3AWClrHB_Z1tLXmInPjblvqaxMqyfZigo', '2023-02-10 02:54:53.809'),
('cldwi7uyh0000w67otparf036', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsZHdpN3V5aDAwMDB3NjdvdHBhcmYwMzYiLCJpYXQiOjE2NzY2MTc3MjMsImV4cCI6MTY3NjcwNDEyM30.ufJyiS_J-guuNhGOp02Z60jyQe2MzT65pvfWGOMsYIE', '2023-02-18 07:08:43.369'),
('cldwi7uyh0000w67otparf036', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsZHdpN3V5aDAwMDB3NjdvdHBhcmYwMzYiLCJpYXQiOjE2NzYwMjQ4NzgsImV4cCI6MTY3NjExMTI3OH0.OJfvW_9W3tFPb3O-H4h_dVICD_mvyv6cqEOBUOdzr_E', '2023-02-11 10:27:58.699'),
('cldwi7uyh0000w67otparf036', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsZHdpN3V5aDAwMDB3NjdvdHBhcmYwMzYiLCJpYXQiOjE2NzYwMTg1NTYsImV4cCI6MTY3NjEwNDk1Nn0.mRtT6acqdzEmCshoewfbnakRPEYur9688i2sJrIURvQ', '2023-02-11 08:42:36.450'),
('cldwi7uyh0000w67otparf036', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsZHdpN3V5aDAwMDB3NjdvdHBhcmYwMzYiLCJpYXQiOjE2NzYwMTI5MjQsImV4cCI6MTY3NjA5OTMyNH0.ihFkKZ6iFm9rDCnyiipnlXLeU0COvK9krJNtjDsw_yY', '2023-02-11 07:08:44.691'),
('cldwi7uyh0000w67otparf036', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsZHdpN3V5aDAwMDB3NjdvdHBhcmYwMzYiLCJpYXQiOjE2NzYwOTIwMDcsImV4cCI6MTY3NjE3ODQwN30.U2EHzxyfFSr7J75kdiqey2hNxwn_rhO5Rj2urhgQWZQ', '2023-02-12 05:06:47.223'),
('cldwi7uyh0000w67otparf036', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsZHdpN3V5aDAwMDB3NjdvdHBhcmYwMzYiLCJpYXQiOjE2NzYxMjA5NjMsImV4cCI6MTY3NjIwNzM2M30.ZavFFWvMPvvBEaim5NkTvuV1AEq7g-y-br71WXWZ9dg', '2023-02-12 13:09:23.704'),
('cldwi7uyh0000w67otparf036', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsZHdpN3V5aDAwMDB3NjdvdHBhcmYwMzYiLCJpYXQiOjE2NzYxMTE0MTYsImV4cCI6MTY3NjE5NzgxNn0.HPd3woF0Umb20OmZ8hKW-bson1A5bDdLc7TDi4sGQ3M', '2023-02-12 10:30:16.230'),
('cldwi7uyh0000w67otparf036', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsZHdpN3V5aDAwMDB3NjdvdHBhcmYwMzYiLCJpYXQiOjE2NzYyNjcyNjIsImV4cCI6MTY3NjM1MzY2Mn0.IGQ-TbQ-gwQKK3ZMbSKqmJr9ZTmkjzRJA2joku7DxNI', '2023-02-14 05:47:42.762'),
('cldwi7uyh0000w67otparf036', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsZHdpN3V5aDAwMDB3NjdvdHBhcmYwMzYiLCJpYXQiOjE2NzYyNTA0MjQsImV4cCI6MTY3NjMzNjgyNH0.WeELmln38oE7t6ESDK9ojQXSIsvqnSMDauJSZKlEj4U', '2023-02-14 01:07:04.111'),
('cldwi7uyh0000w67otparf036', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsZHdpN3V5aDAwMDB3NjdvdHBhcmYwMzYiLCJpYXQiOjE2NzYyNzYxOTAsImV4cCI6MTY3NjM2MjU5MH0.I9X1fdy0YQEpwGVEkwdrNkIC3Tsmm-sl1LRju3ebVfg', '2023-02-14 08:16:30.152'),
('cldwi7uyh0000w67otparf036', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsZHdpN3V5aDAwMDB3NjdvdHBhcmYwMzYiLCJpYXQiOjE2NzYyODcyOTAsImV4cCI6MTY3NjM3MzY5MH0.ppET7GShhD1JMSVLtGoa62bFW41V_dZj95_mNzamOI8', '2023-02-14 11:21:30.447'),
('cldwi7uyh0000w67otparf036', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsZHdpN3V5aDAwMDB3NjdvdHBhcmYwMzYiLCJpYXQiOjE2NzYzMDQyNzcsImV4cCI6MTY3NjM5MDY3N30.MGhfF69oR6EPbO4BPWdC2JhLN_nIKw2Ubd9XRHkHb44', '2023-02-14 16:04:37.027'),
('cldwi7uyi0002w67oa9zvzh78', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsZHdpN3V5aTAwMDJ3NjdvYTl6dnpoNzgiLCJpYXQiOjE2NzYwMDAyOTMsImV4cCI6MTY3NjA4NjY5M30.efF2G17fK7XUpnZnvYONjHeGs_NTwYpEC4-448Tfg-k', '2023-02-11 03:38:13.621'),
('cldwi7uyi0002w67oa9zvzh78', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsZHdpN3V5aTAwMDJ3NjdvYTl6dnpoNzgiLCJpYXQiOjE2NzYwMTI4NDYsImV4cCI6MTY3NjA5OTI0Nn0.kN8sauGL9m-K69oReI9uxOwatfL5yb-YvBShHcNCREA', '2023-02-11 07:07:26.554'),
('cldwi7uyi0002w67oa9zvzh78', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsZHdpN3V5aTAwMDJ3NjdvYTl6dnpoNzgiLCJpYXQiOjE2NzYyNjczNzUsImV4cCI6MTY3NjM1Mzc3NX0.O32ZGs0ATJR9LZBaLgr3kKOhRMqCBiCfuhhkUpg-dnM', '2023-02-14 05:49:35.387'),
('cldwi7uyi0002w67oa9zvzh78', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsZHdpN3V5aTAwMDJ3NjdvYTl6dnpoNzgiLCJpYXQiOjE2NzYyNTI2OTIsImV4cCI6MTY3NjMzOTA5Mn0.CR8FiWRpojm3tmBjX0HSkpDKLfnDBGrWu6jKjLne8k0', '2023-02-14 01:44:52.048'),
('cle24zwyl0000w640gil9q0e7', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsZTI0end5bDAwMDB3NjQwZ2lsOXEwZTciLCJpYXQiOjE2NzYyNTE3NDgsImV4cCI6MTY3NjMzODE0OH0.6gE-BxIKH-2Z3UEVVI7p-wkWJaiD5o-zYs_21ppjHco', '2023-02-14 01:29:08.731');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('324858b7-c18c-47f5-a32b-60709c1ff896', '22a830ce5138fc98f81a6d766c27d873ad218acfbbd60e3f313f17ab867faed5', '2023-02-09 08:28:59.066', '20230209082858_', NULL, NULL, '2023-02-09 08:28:58.351', 1),
('38061396-1257-477b-b191-9a0e7e5fed43', '40e95be66af05005be1618d555b46529561c5be4ec8a23930aec2e5bbcccf3f8', '2023-02-09 02:49:50.422', '20230209014728_', NULL, NULL, '2023-02-09 02:49:50.069', 1),
('3c0d6b54-2b60-4eee-879f-8d027b2d8a0c', 'd2dde5645b6053cc5bc394b771cd5c4ce437d0552c7990efab715831025525e5', '2023-02-09 02:49:51.141', '20230209024145_', NULL, NULL, '2023-02-09 02:49:50.868', 1),
('4b74032d-95c6-45b2-88f6-d45059498b47', 'f3d19ce8d494dd01fcce48a4ba85ae5eab57405879db7f78033e0d4ffdabcfa8', '2023-02-09 02:49:50.860', '20230209015558_', NULL, NULL, '2023-02-09 02:49:50.429', 1),
('7cd47d87-15d3-47c9-9b9b-2ba86fec8f0b', 'aaeaea556d17c525d25c43dc61087e1bbd9a0029ba291ae76b36bb813f20d7a3', '2023-02-09 02:50:02.429', '20230209025001_', NULL, NULL, '2023-02-09 02:50:01.956', 1),
('936a4601-09c6-416c-9012-9bb2e445e1d5', 'd1a7d7c880a50f5fcce20a18ca9453b65b07baf2b05398b319f827a93655b097', '2023-02-09 02:49:51.327', '20230209024459_', NULL, NULL, '2023-02-09 02:49:51.151', 1),
('9cb5e9f2-08a9-4c38-a7f3-fb299e2b3e1e', 'caf1ded8434e0177a8161c5e49399bfb4392cdcbc0ebd6a74b8b5ace33b58fc1', '2023-02-09 02:49:50.061', '20230113030747_', NULL, NULL, '2023-02-09 02:49:49.913', 1),
('e9f262dd-734f-4891-9ebe-f7e17208d980', '9b5d808536985fda606fcddc82784b5f1a692345f58e4d9dc121e0fec8dcc014', '2023-02-09 02:49:49.897', '20230112095537_', NULL, NULL, '2023-02-09 02:49:49.150', 1),
('f6ffd1f8-d00e-443c-82b1-95b4520e9ad0', '72413d9d0311964eb21aa56212715bd4a452832e105f01a7cdd953c2a430e4ab', '2023-02-09 08:36:13.467', '20230209083612_', NULL, NULL, '2023-02-09 08:36:12.719', 1);

-- --------------------------------------------------------

--
-- Table structure for table `_RoomsToUser`
--

CREATE TABLE `_RoomsToUser` (
  `A` varchar(191) NOT NULL,
  `B` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_RoomsToUser`
--

INSERT INTO `_RoomsToUser` (`A`, `B`) VALUES
('cldwi80y70004w67o88qjy85v', 'cldwi7uyh0000w67otparf036'),
('cldwi80y70004w67o88qjy85v', 'cldwi7uyi0002w67oa9zvzh78'),
('cle250pya0000w6scsneqqrgj', 'cldwi7uyh0000w67otparf036'),
('cle250pya0000w6scsneqqrgj', 'cle24zwyl0000w640gil9q0e7'),
('cle25wnc3000tw6sctym1mmk5', 'cldwi7uyi0002w67oa9zvzh78'),
('cle25wnc3000tw6sctym1mmk5', 'cle24zwyl0000w640gil9q0e7');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Account`
--
ALTER TABLE `Account`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Account_provider_providerAccountId_key` (`provider`,`providerAccountId`),
  ADD KEY `Account_userId_fkey` (`userId`);

--
-- Indexes for table `Answers`
--
ALTER TABLE `Answers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Answers_question_id_key` (`question_id`);

--
-- Indexes for table `GroupQuestions`
--
ALTER TABLE `GroupQuestions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `GroupQuestions_passage_id_fkey` (`passage_id`);

--
-- Indexes for table `Messages`
--
ALTER TABLE `Messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Messages_senderID_fkey` (`senderID`),
  ADD KEY `Messages_roomId_fkey` (`roomId`);

--
-- Indexes for table `Passages`
--
ALTER TABLE `Passages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Passages_quiz_id_fkey` (`quiz_id`);

--
-- Indexes for table `Questions`
--
ALTER TABLE `Questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Questions_group_question_id_fkey` (`group_question_id`);

--
-- Indexes for table `Quizzes`
--
ALTER TABLE `Quizzes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Rooms`
--
ALTER TABLE `Rooms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Indexes for table `VerificationToken`
--
ALTER TABLE `VerificationToken`
  ADD UNIQUE KEY `VerificationToken_token_key` (`token`),
  ADD UNIQUE KEY `VerificationToken_identifier_token_key` (`identifier`,`token`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `_RoomsToUser`
--
ALTER TABLE `_RoomsToUser`
  ADD UNIQUE KEY `_RoomsToUser_AB_unique` (`A`,`B`),
  ADD KEY `_RoomsToUser_B_index` (`B`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Account`
--
ALTER TABLE `Account`
  ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Answers`
--
ALTER TABLE `Answers`
  ADD CONSTRAINT `Answers_question_id_fkey` FOREIGN KEY (`question_id`) REFERENCES `Questions` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `GroupQuestions`
--
ALTER TABLE `GroupQuestions`
  ADD CONSTRAINT `GroupQuestions_passage_id_fkey` FOREIGN KEY (`passage_id`) REFERENCES `Passages` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Messages`
--
ALTER TABLE `Messages`
  ADD CONSTRAINT `Messages_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Rooms` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Messages_senderID_fkey` FOREIGN KEY (`senderID`) REFERENCES `User` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Passages`
--
ALTER TABLE `Passages`
  ADD CONSTRAINT `Passages_quiz_id_fkey` FOREIGN KEY (`quiz_id`) REFERENCES `Quizzes` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Questions`
--
ALTER TABLE `Questions`
  ADD CONSTRAINT `Questions_group_question_id_fkey` FOREIGN KEY (`group_question_id`) REFERENCES `GroupQuestions` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `_RoomsToUser`
--
ALTER TABLE `_RoomsToUser`
  ADD CONSTRAINT `_RoomsToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Rooms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_RoomsToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
