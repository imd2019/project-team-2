# Dokumentation

## Klassenbeschreibung: 
### Display Object

#### Attribute
|name|Bescheibung|
| --- | --- |
|**x:**|Aktuelle X-Position|  
|**y:** |Aktuelle Y-Position|
|**imageWidth:** |Breite, in welcher das aktuelle Bild des Objektes gezeichnet wird|  
|**imageHeight:** |Höhe, in welcher das aktuelle Bild des Objektes gezeichnet wird|  
|**rot:** |Aktuelle Rotation des Objektes in Bogenmaß|
|**scale:** |Skallierung des gezeichneten Bildes. 1 = 100% | 0.5 = 50%|
|**images:** |Eine Liste, welche unter einem bestimmten Schlüsselstring ein bestimmtes Bild abspeichert|
|**doms:** |Eine Liste welche unter einem bestimmten Schlüsselstring ein bestimmtes Video oder Gif abspeichert|
|**currentImage:** |Das Bild, welches gerade ausgewählt ist|
|**currentDom:** |Das Video oder Gif, welches gerade ausgewählt ist|
|**offsetX:** |Die Verschiebung, um welches das aktuelle Bild des Objektes beim Zeichnen in X-Richtung verschoben wird.|
|**offsetY:** |Die Verschiebung, um welches das aktuelle Bild des Objektes beim Zeichnen in Y-Richtung verschoben wird.|
|**visible:** |Bestimmt, ob das Objekt dargestellt wird oder nicht. True: das aktuelle Image wird gezeichnet und die Draw-Funktion ausgeführt.| 
|**parent:** |Wenn das Objekt einem anderem Objekt(einem Elternobjekt) als Child zugewiesen wird, wird hier das Elternobejekt gespeichert.|

#### Methoden
| Name | Aufruf | Beschreibung|Leer|
| --- | --- | --- | --- |
|  draw() | jeden Frame | Die Funktion sollte allen Code enthalten, der mit dem Aussehen des Objektes zu tun hat. Auch wird alles, was hier gezeichnet wird über das Image des Objektes gelegt. Hier könnte man mit P5 Objekten Arbeiten(Rect, text, etc.).| ja |
|  update() | jeden Frame | Die Funktion sollte allen Code enthalten, der mit Updates von dem Objekt zu tun hat. Hier könnte man Variablen etc. prüfen und anpassen.| ja |
|  init() | wird beim Start der Anwedung ausgeführt | Hier sollten Child Objekte erstellt und Bilder zugewiesen werden. Auch kann hier diverses andere definiert werden. Attribute sollten immer noch im Konrstrukter angelegt werden!!| ja |
|  hide(hide) | custom | Kann mit oder ohne Arguemnt ausgeführt werden. Ohne Angabe wird das Objekt unsichtbar gemacht. Mit der Angabe true wird das Objekt wieder sichtbar. Hat keinen Einfluss auf Videos oder Gifs! Diese müssen extra angezeigt und versteckt werden siehe showDom/hideDom| nein |
|  setRotationInDegree(`degree`) | custom |Rechnet die angegebenen `degree` in Bogenmaß um und setzt **rot** neu.| nein |
|  setOffset(`x`,`y`) | custom |Setzt das Offset für die **draw** und für das **currentImage** neu. Dom Offsets müssen extra über setDomOffset gesetzt werden.| nein |
|  addImage(`key`,`image`) | custom | Fügt ein `image` mit dem Schlüssel `key` der **images** Liste hinzu| nein |
|  switchImage(`key`) | custom | Wechselt das **currentImage** des Obejektes auf das image mit dem Schlüssel `key` aus der **images** Liste| nein |
|  setImageSize(`width`,`height`) | custom |Setzt die **imageWidth** auf `width` und die **imageHeight** auf `height`. Setzt nur die Bildgröße neu.| nein |
|  addDom(`key`,`dom`) | custom | Fügt ein `dom` mit dem Schlüssel `key` der **doms** Liste hinzu. Doms bezeichnet in dem Fall Videos oder Gifs| nein |
|  switchDom(`key`) | custom | Wechselt das **currentDom** des Obejektes auf das Gif oder Video mit dem Schlüssel `key` aus der **doms** Liste. Wenn vorher ein Dom ausgewählt wurde, wird es automatisch angehalten und versteckt.| nein |
|  setDomSize(`width`,`height`) | custom |Setzt die Breite des aktuell ausgewählten Gifs oder Video auf `width` und die Höhe auf `height`. Setzt nur die Größe des aktuellen Video oder Gifs neu!| nein |
|  showDom() | custom |Zeigt das aktuell ausgewählte Dom an.| nein |
|  hideDom() | custom |Versteckt das aktuell ausgewählte Dom an.| nein |
|  playDom() | custom |Spielt das aktuell ausgewählte Dom ab. Wird nur bei Videos benutzt.| nein |
|  stopDom() | custom |Stoppt das aktuell ausgewählte Dom. Wird nur bei Videos benutzt.| nein |
|  setDomOffset(`x`,`y`) | custom |Setzt ein Offset für das aktuell ausgewählte Dom| nein |
|  display() | custom |Verwaltet die Reinfolge der Anzeigen von draw und currentImage. Wendet auch die angegebenen Transformationen(Rotation und Offset) an.| nein |











