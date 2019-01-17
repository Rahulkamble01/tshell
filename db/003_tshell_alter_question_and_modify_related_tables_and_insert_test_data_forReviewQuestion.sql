
INSERT INTO `question`(qu_qd_id,qu_question,qu_status,qu_created_date)
VALUES (2,'Which of the following is not OOPS concept in Java?','Pending','2013-12-12'),
       (2,'Which of the following is a type of polymorphism in Java?','Pending','2017-11-12'),
       (2,'When does method overloading is determined?','Pending','2018-11-15'),
       (2,'What is it called if an object has its own lifecycle and there is no owner?','Pending','2018-12-10'),
       (2,'Which concept of Java is a way of converting real world objects in terms of class?','Pending','2018-12-05'),
       (2,'Which concept of Java is achieved by combining methods and attribute into a class?','Pending','2016-02-12');    
       
UPDATE `tshell`.`question` SET `qu_status`='Pending' where qu_id!=0;
UPDATE `tshell`.`question` SET `qu_qd_id`=2 where qu_id!=0;

INSERT INTO `tshell`.`skill` (sk_name,sk_search_count,sk_active,sk_test_count,sk_description)
VALUES ('Core Java',100,'Yes',5,'A high level programming language');

INSERT INTO `tshell`.`topic` (tp_name,tp_sk_id,tp_percentage)
VALUES ('OOP',5,0);

INSERT INTO `tshell`.`user_skill` (uk_us_id,uk_sk_id)
VALUES (3,5);


INSERT INTO `tshell`.`topic_question` (`tq_tp_id`, `tq_qu_id`) VALUES (7, 13);

INSERT INTO `tshell`.`topic_question` (`tq_tp_id`, `tq_qu_id`) VALUES (7, 14);

INSERT INTO `tshell`.`topic_question` (`tq_tp_id`, `tq_qu_id`) VALUES (7, 15);

INSERT INTO `tshell`.`topic_question` (`tq_tp_id`, `tq_qu_id`) VALUES (7, 16);

INSERT INTO `tshell`.`topic_question` (`tq_tp_id`, `tq_qu_id`) VALUES (7, 17);

INSERT INTO `tshell`.`topic_question` (`tq_tp_id`, `tq_qu_id`) VALUES (7, 18);


INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Inheritance', 13, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Encapsulation', 13, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Polymorphism', 13, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Compilation', 13, 1);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES (' Compile time polymorphism', 14, 1);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Execution time polymorphism', 14, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Multiple polymorphism', 14, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Multilevel polymorphism', 14, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('At run time', 15, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('At compile time', 15, 1);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('At coding time', 15, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('At execution time', 15, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Aggregation', 16, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Composition', 16, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Encapsulation', 16, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Association', 16, 1);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Polymorphism', 17, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Encapsulation', 17, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Abstraction', 17, 1);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Inheritance', 17, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Encapsulation', 18, 1);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Inheritance', 18, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Polymorphism', 18, 0);

INSERT INTO `tshell`.`option` (`op_description`, `op_qu_id`, `op_is_correct`) VALUES ('Polymorphism', 18, 0);



CREATE TABLE `tshell`.my_stopwords(value VARCHAR(30)) ENGINE = INNODB;

INSERT INTO my_stopwords(value) VALUES ('a\'s'),('able'),('about'),('above'),('according'),('accordingly'),('across'),('actually'),('after'),('afterwards'),('again'),('against'),('ain\'t'),('all'),('allow'),('allows'),('almost'),('alone'),('along'),('already'),('also'),('although'),('always'),('am'),('among'),('amongst'),('an'),('and'),('another'),('any'),('anybody'),('anyhow'),('anyone'),('anything'),('anyway'),('anyways'),('anywhere'),('apart'),('appear'),('appreciate'),('appropriate'),('are'),('aren\'t'),('around'),('as'),('aside'),('ask'),('asking'),('associated'),('at'),('available'),('away'),('awfully'),('be'),('became'),('because'),('become'),('becomes'),('becoming'),('been'),('before'),('beforehand'),('behind'),('being'),('believe'),('below'),('beside'),('besides'),('best'),('better'),('between'),('beyond'),('both'),('brief'),('but'),('by'),('c\'mon'),('c\'s'),('came'),('can'),('can\'t'),('cannot'),('cant'),('cause'),('causes'),('certain'),('certainly'),('changes'),('clearly'),('co'),('com'),('come'),('comes'),('concerning'),('consequently'),('consider'),('considering'),('contain'),('containing'),('contains'),('corresponding'),('could'),('couldn\'t'),('course'),('currently'),('definitely'),('described'),('despite'),('did'),('didn\'t'),('different'),('do'),('does'),(' doesn\'t'),('doing'),('don\'t'),('done'),('down'),('downwards'),('during'),('each'),('edu'),('eg'),('eight'),('either'),('else'),('elsewhere'),('enough'),('entirely'),('especially'),('et'),('etc'),('even'),('ever'),('every'),('everybody'),('everyone'),('everything'),('everywhere'),('ex'),('exactly'),('example'),('except'),('far'),('few'),('fifth'),('first'),('five'),('followed'),('following'),('follows'),('for'),('former'),('formerly'),('forth'),('four'),('from'),('further'),('furthermore'),('get'),('gets'),('getting'),('given'),('gives'),('go'),('goes'),('going'),('gone'),('got'),('gotten'),('greetings'),('had'),('hadn\'t'),('happens'),('hardly'),('has'),('hasn\'t'),('have'),('haven\'t'),('having'),('he'),('he\'s'),('hello'),('help'),('hence'),('her'),('here'),('here\'s'),('hereafter'),('hereby'),('herein'),('hereupon'),('hers'),('herself'),('hi'),('him'),('himself'),('his'),('hither'),('hopefully'),('how'),('howbeit'),('however'),('i\'d'),('i\'ll'),('i\'m'),('i\'ve'),('ie'),('if'),('ignored'),('immediate'),('in'),('inasmuch'),('inc'),('indeed'),('indicate'),('indicated'),('indicates'),('inner'),('insofar'),('instead'),('into'),('inward'),('is'),('isn\'t'),('it'),('it\'d'),('it\'ll'),('it\'s'),('its'),('itself'),('just'),('keep'),('keeps'),('kept'),('know'),('known'),('knows'),('last'),('lately'),('later'),('latter'),('latterly'),('least'),('less'),('lest'),('let'),('let\'s'),('like'),('liked'),('likely'),('little'),('look'),('looking'),('looks'),('ltd'),('mainly'),('many'),('may'),('maybe'),('me'),('mean'),('meanwhile'),('merely'),('might'),('more'),('moreover'),('most'),('mostly'),('much'),('must'),('my'),('myself'),('name'),('namely'),('nd'),('near'),('nearly'),('necessary'),('need'),('needs'),('neither'),('never'),('nevertheless'),('new'),('next'),('nine'),('no'),('nobody'),('non'),('none'),('noone'),('nor'),('normally'),('not'),('nothing'),('novel'),('now'),('nowhere'),('obviously'),('of'),('off'),('often'),('oh'),('ok'),('okay'),('old'),('on'),('once'),('one'),('ones'),('only'),('onto'),('or'),('other'),('others'),('otherwise'),('ought'),('our'),('ours'),('ourselves'),('out'),('outside'),('over'),('overall'),('own'),('particular'),('particularly'),('per'),('perhaps'),('placed'),('please'),('plus'),('possible'),('presumably'),('probably'),('provides'),('que'),('quite'),('qv'),('rather'),('rd'),('re'),('really'),('reasonably'),('regarding'),('regardless'),('regards'),('relatively'),('respectively'),('right'),('said'),('same'),('saw'),('say'),('saying'),('says'),('second'),('secondly'),('see'),('seeing'),('seem'),('seemed'),('seeming'),('seems'),('seen'),('self'),('selves'),('sensible'),('sent'),('serious'),('seriously'),('seven'),('several'),('shall'),('she'),('should'),('shouldn\'t'),('since'),('six'),('so'),('some'),('somebody'),('somehow'),('someone'),('something'),('sometime'),('sometimes'),('somewhat'),('somewhere'),('soon'),('sorry'),('specified'),('specify'),('specifying'),('still'),('sub'),('such'),('sup'),('sure'),('t\'s'),('take'),('taken'),('tell'),('tends'),('th'),('than'),('thank'),('thanks'),('thanx'),('that'),('that\'s'),('thats'),('the'),('their'),('theirs'),('them'),('themselves'),('then'),('thence'),('there'),('there\'s'),('thereafter'),('thereby'),('therefore'),('therein'),('theres'),('thereupon'),('these'),('they'),('they\'d'),('they\'ll'),('they\'re'),('they\'ve'),('think'),('third'),('this'),('thorough'),('thoroughly'),('those'),('though'),('three'),('through'),('throughout'),('thru'),('thus'),('to'),('together'),('too'),('took'),('toward'),('towards'),('tried'),('tries'),('truly'),('try'),('trying'),('twice'),('two'),('un'),('under'),('unfortunately'),('unless'),('unlikely'),('until'),('unto'),('up'),('upon'),('us'),('use'),('used'),('useful'),('uses'),('using'),('usually'),('value'),('various'),('very'),('via'),('viz'),('vs'),('want'),('wants'),('was'),('wasn\'t'),('way'),('we'),('we\'d'),('we\'ll'),('we\'re'),('we\'ve'),('welcome'),('well'),('went'),('were'),('weren\'t'),('what'),('what\'s'),('whatever'),('when'),('whence'),('whenever'),('where'),('where\'s'),('whereafter'),('whereas'),('whereby'),('wherein'),('whereupon'),('wherever'),('whether'),('which'),('while'),('whither'),('who'),('who\'s'),('whoever'),('whole'),('whom'),('whose'),('why'),('will'),('willing'),('wish'),('with'),('within'),('without'),('won\'t'),('wonder'),('would'),('wouldn\'t'),('yes'),('yet'),('you'),('you\'d'),('you\'ll'),('you\'re'),('you\'ve'),('your'),('yours'),('yourself'),('yourselves'),('zero');

SET GLOBAL innodb_ft_server_stopword_table = 'tshell/my_stopwords';

SET GLOBAL innodb_ft_aux_table='tshell/question';

SET GLOBAL innodb_ft_user_stopword_table = 'tshell/my_stopwords';


alter table `tshell`.`question` add fulltext(qu_question);