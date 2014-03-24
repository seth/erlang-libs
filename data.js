function DataCtrl($scope) {
  $scope.predicate = '-name';
  $scope.data = [
      {
          name:     'lager',
          github:   'basho/lager',
          license:  'Apache',
          tags:     ['logging'],
          desc:     'Logging framework'
      },
      {
          name:     'eldap',
          github:   'etnt/eldap',
          license:  'MIT',
          tags:     ['ldap', 'auth'],
          desc:     'LDAP authentication'
      },
      {
          name:     'erl_img',
          github:   'evanmiller/erl_img',
          license:  '--',
          tags:     ['img'],
          desc:     'Basic image manipulation'
      },
      {
          name:     'jerome',
          github:   'evanmiller/jerome',
          license:  '--',
          tags:     ['rtf'],
          desc:     'Rich-text processor (Textile, HTML, RTF)'
      },
      {
          name:     'meck',
          github:   'eproxus/meck',
          license:  'Apache',
          tags:     ['tests'],
          desc:     'A mocking library (compatible with EUnit)'
      },
      {
          name:     'xmlrpc',
          github:   'etnt/xmlrpc',
          license:  'BSD',
          tags:     ['rpc'],
          desc:     'XML-RPC library'
      },
      {
          name:     'hello',
          github:   'travelping/hello',
          license:  '--',
          tags:     ['rpc'],
          desc:     'RPC server framework'
      },
      {
          name:     'gen_smtp',
          github:   'Vagabond/gen_smtp',
          tags:     ['smtp', 'email'],
          license:  'BSD',
          desc:     'SMTP server and client'
      },
      {
          name:     'gproc',
          github:   'uwiger/gproc',
          tags:     ['process'],
          license:  'EPL',
          desc:     'Extended process registry'
      },
      {
          name:     'bert.erl',
          github:   'mojombo/bert.erl',
          tags:     ['bert'],
          license:  'MIT',
          desc:     'BERT encoder/decoder'
      },
      {
          name:     'socket.io-erlang',
          github:   'yrashk/socket.io-erlang',
          tags:     ['socket.io'],
          license:  '--',
          desc:     'Full-blown socket.io server reimplementation'
      },
      {
          name:     'mochiweb',
          github:   'mochi/mochiweb',
          tags:     ['http-server'],
          license:  'MIT',
          desc:     'Library for building lightweight HTTP servers'
      },
      {
          name:     'misultin',
          github:   'ostinelli/misultin',
          tags:     ['http-server', 'websockets'],
          license:  'BSD',
          desc:     'Library for building fast lightweight HTTP(S) servers (with websockets support)'
      },
      {
          name:     'cowboy',
          github:   'extend/cowboy',
          tags:     ['http-server', 'websockets'],
          license:  'BSD',
          desc:     'Small, fast and modular HTTP server'
      },
      {
          name:     'cowlib',
          github:   'extend/cowlib',
          tags:     ['http', 'websockets', 'spdy'],
          license:  'BSD',
          desc:     'Support library for manipulating Web protocols'
      },
      {
          name:     'bullet',
          github:   'extend/bullet',
          tags:     ['streaming'],
          license:  'BSD',
          desc:     'Cowboy handler and associated Javascript library for maintaining a persistent connection between a client and a server.'
      },
      {
          name:     'ranch',
          github:   'extend/ranch',
          tags:     ['tcp', 'socket'],
          license:  'BSD',
          desc:     'Socket acceptor pool for TCP protocols'
      },
      {
          name:     'gun',
          github:   'extend/gun',
          tags:     ['http', 'spdy', 'websockets', 'client'],
          license:  'BSD',
          desc:     'Asynchronous SPDY, HTTP and Websocket client'
      },
      {
          name:     'ibrowse',
          github:   'cmullaparthi/ibrowse',
          tags:     ['http', 'client'],
          license:  'BSD',
          desc:     'HTTP client'
      },
      {
          name:     'dh_date',
          github:   'daleharvey/dh_date',
          tags:     ['date'],
          license:  '--',
          desc:     'Date formatting / parsing library'
      },
      {
          name:     'eiconv',
          github:   'mmzeeman/eiconv',
          tags:     ['iconv'],
          license:  'Apache',
          desc:     'iconv NIF wrapper'
      },
      {
          name:     'mimetypes',
          github:   'spawngrid/mimetypes',
          tags:     ['mime'],
          license:  'BSD',
          desc:     'MIME types library'
      },
      {
          name:     'ua_classifier',
          github:   'zotonic/ua_classifier',
          tags:     ['user-agent'],
          license:  'Apache',
          desc:     'User-Agent Classifier'
      },
      {
          name:     'jobs',
          github:   'esl/jobs',
          tags:     ['scheduler'],
          license:  'Apache',
          desc:     'Job scheduler for load regulation'
      },
      {
          name:     'edown',
          github:   'esl/edown',
          tags:     ['edoc', 'markdown'],
          license:  '--',
          desc:     'EDoc extension for generating Github-flavored Markdown'
      },
      {
          name:     'lhttpc',
          github:   'esl/lhttpc',
          tags:     ['http', 'client'],
          license:  'BSD',
          desc:     'Lightweight HTTP/1.1 client'
      },
      {
          name:     'exml',
          github:   'paulgray/exml',
          tags:     ['xml'],
          license:  'Apache',
          desc:     'XML parsing library'
      },
      {
          name:     'jiffy',
          github:   'davisp/jiffy',
          tags:     ['json'],
          license:  'MIT',
          desc:     'JSON encoder/decoder (NIFs)'
      },
      {
          name:     'erlydtl',
          github:   'erlydtl/erlydtl',
          tags:     ['templates'],
          license:  '--',
          desc:     'Django templates'
      },
      {
          name:     'poolboy',
          github:   'devinus/poolboy',
          tags:     ['pool'],
          license:  'Apache',
          desc:     'A hunky Erlang worker pool factory'
      },
      {
          name:     'neotoma',
          github:   'seancribbs/neotoma',
          tags:     ['peg'] ,
          license:  'MIT',
          desc:     'Packrat parser-generator for Parsing Expression Grammars (PEGs)'
      },
      {
          name:     'confetti',
          github:   'jtendo/confetti',
          tags:     ['configuration'] ,
          license:  'BSD',
          desc:     'Configuration provider (application:get_env/2 on steroids)'
      },
      {
          name:     'epgsql',
          github:   'wg/epgsql',
          tags:     ['postgres', 'client'],
          license:  'BSD',
          desc:     'PostgreSQL client'
      },
      {
          name:     'Emysql',
          github:   'Eonblast/Emysql',
          tags:     ['mysql', 'client'],
          license:  'MIT',
          desc:     'MySQL driver'
      },
      {
          name:     'riak-erlang-client',
          github:   'basho/riak-erlang-client',
          tags:     ['riak', 'client'],
          license:  'Apache',
          desc:     'Clients for Riak'
      },
      {
          name:     'erlmongo',
          github:   'SergejJurecko/erlmongo',
          tags:     ['mongodb', 'client'],
          license:  'Apache',
          desc:     'Driver for mongodb'
      },
      {
          name:     'eredis',
          github:   'wooga/eredis',
          tags:     ['redis', 'client'],
          license:  'MIT',
          desc:     'Redis client'
      },
      {
          name:     'boss_db',
          github:   'ChicagoBoss/boss_db',
          tags:     ['orm', 'mongodb', 'mysql', 'postgres', 'riak'],
          license:  'MIT',
          desc:     'Sharded, caching, pooling, evented ORM'
      },
      {
          name:     'voltdb-client-erlang',
          github:   'VoltDB/voltdb-client-erlang',
          tags:     ['voltdb', 'client'],
          license:  'MIT',
          desc:     'VoltDB client'
      },
      {
          name:     'procket',
          github:   'msantos/procket',
          tags:     ['socket'],
          license:  '--',
          desc:     'Erlang interface to low level socket operations'
      },
      {
          name:     'barrel',
          github:   'benoitc/barrel',
          tags:     ['tcp', 'pool'],
          license:  'MIT',
          desc:     'Generic TCP acceptor pool with low latency'
      },
      {
          name:     'hackney',
          github:   'benoitc/hackney',
          tags:     ['http', 'client'],
          license:  'Apache',
          desc:     'HTTP client'
      },
      {
          name:     'elli',
          github:   'knutin/elli',
          tags:     ['http-server'],
          license:  'MIT',
          desc:     'Simple, robust and performant web server'
      },
      {
          name:     'jsonx',
          github:   'iskra/jsonx',
          tags:     ['json'],
          license:  'MIT',
          desc:     'Library for efficient decode and encode JSON'
      },
      {
          name:     'mochijson2',
          github:   'bjnortier/mochijson2',
          tags:     ['json'],
          license:  '--',
          desc:     'The json encoding modules from mochiweb'
      },
      {
          name:     'jsx',
          github:   'talentdeficit/jsx',
          tags:     ['json'],
          license:  'MIT',
          desc:     'Library for consuming, producing and manipulating json'
      },
      {
          name:     'beepbeep',
          github:   'davebryson/beepbeep',
          tags:     ['framework'],
          license:  'MIT',
          desc:     'Simple web application framework for Mochiweb inspired by Rails and Merb'
      },
      {
          name:     'ChicagoBoss',
          github:   'ChicagoBoss/ChicagoBoss',
          tags:     ['framework', 'comet'],
          license:  'MIT',
          desc:     'Web MVC framework'
      },
      {
          name:     'n2o',
          github:   '5HT/n2o',
          tags:     ['framework', 'websockets'],
          license:  'MIT',
          desc:     'Web Framework on WebSockets'
      },
      {
          name:     'axiom',
          github:   'tsujigiri/axiom',
          tags:     ['framework'],
          license:  'MIT',
          desc:     'Micro-framework for web applications'
      },
      {
          name:     'spooky',
          github:   'flashingpumpkin/spooky',
          tags:     ['framework'],
          license:  'MIT',
          desc:     'Minimum viable web framework'
      },
      {
          name:     'giallo',
          github:   'kivra/giallo',
          tags:     ['framework'],
          license:  'MIT',
          desc:     'Small and flexible web framework on top of Cowboy'
      },
      /*
      {
          name:     '',
          github:   '',
          tags:     [''],
          license:  '',
          desc:     ''
      },
      */
  ];
}
