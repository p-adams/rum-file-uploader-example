(ns file-uploader.core-test
  (:require
   [cljs.test :refer-macros [deftest is testing]]))

(deftest add-test
  (is (= (* 2 2) (+ 2 2))))