(ns ^:figwheel-hooks file-uploader.core
  (:require
   [goog.dom :as gdom]
   [rum.core :as rum]))

(defonce user-file (atom nil))

;; Todo: handle multiple file uploads

(rum/defc file-uploader < rum/reactive  []
  (let [ref (rum/create-ref)]
    [:form {:on-submit (fn [e] (.preventDefault e))}
     [:div nil
      [:input
       {:ref ref
        :key "file-upload"
        :type "file"
        :name "File Upload"
        :style {:display "none"}
        :on-change (fn []
                     (let [file (aget (.-files (rum/deref ref)) 0)]
                       (reset! user-file file)))}]

      [:button
       {:class "success"
        :on-click (fn [] (.click (rum/deref ref)))}
       [:i {:class "fa fa-upload success" :aria-hidden true}]]]]))

(rum/defc file-item [f]
  [:div {:class "file-item-container"}
   (if f
     (rum/fragment [:div nil [:span "Name: "] (.-name f)]
                   [:div nil [:span "Size: "] (.-size f)]
                   [:div nil [:span "Last modified: "] (.-lastModified f)])
     [:i {:class "fa fa-file" :style {:fontSize "50px"} :aria-hidden true}])])


(rum/defc app < rum/reactive []
  [:div {:class "container"} [:div {:class "header"} "File Uploader"]
   [:div {:class "content"} (file-item (rum/react user-file))]
   [:div {:class "footer"} (file-uploader)]])


(defn get-app-element []
  (rum/mount (app) (gdom/getElement "app")))

(get-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  (swap! user-file update-in [:__figwheel_counter] inc))
