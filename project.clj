(defproject file-uploader.core "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.7.1"

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.520"]
                 [rum "0.11.5"]]

  :source-paths ["src"]

  :aliases {"fig"       ["run" "-m" "figwheel.main"]
            "fig:build" ["run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "fig:min"   ["run" "-m" "figwheel.main" "-O" "advanced" "-bo" "dev"]
            "fig:test"  ["run" "-m" "figwheel.main" "-co" "test.cljs.edn" "-m" "file-uploader.test-runner"]}

  :profiles {:dev {:dependencies [[com.bhauman/figwheel-main "0.2.3"]]}})
