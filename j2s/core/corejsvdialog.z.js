(function(w,x,y,z,A,h,t,g,p,q,B,C,j,D,r,s,m,E,n,u,l,F,v,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,d,e){h("JSV.dialog");g(["JSV.dialog.JSVDialog"],"JSV.dialog.IntegrationDialog",["java.lang.Double","JU.DF","JSV.common.Annotation"],function(){c$=n(JSV.dialog,"IntegrationDialog",JSV.dialog.JSVDialog);j(c$,function(){l(this,JSV.dialog.IntegrationDialog,[]);this.type=JSV.common.Annotation.AType.Integration});e(c$,"getPosXY",function(){return JSV.dialog.IntegrationDialog.posXY});
d(c$,"addUniqueControls",function(){this.txt1=this.dialog.addTextField("txtBaselineOffset","Baseline Offset",null,"%",""+this.vwr.parameters.integralOffset,!0);this.txt2=this.dialog.addTextField("txtScale","Scale",null,"%",""+this.vwr.parameters.integralRange,!0);this.dialog.addButton("btnApply","Apply");this.addApplyBtn=!1;this.dialog.addButton("btnAuto","Auto");this.dialog.addButton("btnDelete","Delete");this.dialog.addButton("btnNormalize","Normalize")});e(c$,"applyFromFields",function(){this.apply([this.dialog.getText(this.txt1),
this.dialog.getText(this.txt2)])});e(c$,"callback",function(a,b){var c;try{if(a.equals("SHOWSELECTION")){for(c=0;c<this.xyData.size();c++)if(JU.DF.formatDecimalDbl(this.xyData.get(c).getXVal(),2).equals(b)){this.iSelected=c;this.jsvp.getPanelData().setXPointers(this.$spec,this.xyData.get(c).getXVal(),this.$spec,this.xyData.get(c).getXVal2());this.jsvp.doRepaint(!0);break}return!0}if(!a.equals("windowClosing")&&!a.equals("FOCUS")){if(a.equals("btnAuto")||null==this.xyData||0==this.xyData.size())return this.vwr.runScript("integrate auto"),
this.eventApply(),!0;this.setFocus(!0)}if(a.equals("btnDelete"))this.deleteIntegral();else if(a.equals("btnNormalize")){if(!this.checkSelectedIntegral())return!0;var f=this.manager.getDialogInput(this.dialog,"Enter a normalization factor","Normalize",3,null,null,""+this.lastNorm);c=Double.parseDouble(f);0<c&&this.xyData.setSelectedIntegral(this.xyData.get(this.iSelected),this.lastNorm=c);this.eventApply()}else return this.callbackAD(a,b)}catch(k){if(!r(k,Exception))throw k;}return!0},"~S,~S");d(c$,
"checkSelectedIntegral",function(){return 0>this.iSelected?(this.showMessage("Select a line on the table first, then click this button.","Integration",1),!1):!0});d(c$,"deleteIntegral",function(){this.checkSelectedIntegral()&&(this.xyData.remove(this.iSelected),this.iRowColSelected=this.iSelected=-1,this.applyFromFields())});m(c$,"posXY",[-2147483648,0])});h("JSV.dialog");g(["JSV.dialog.JSVDialog"],"JSV.dialog.PeakListDialog",["JSV.common.Annotation"],function(){c$=n(JSV.dialog,"PeakListDialog",JSV.dialog.JSVDialog);
j(c$,function(){l(this,JSV.dialog.PeakListDialog,[]);this.type=JSV.common.Annotation.AType.PeakList});e(c$,"getPosXY",function(){return JSV.dialog.PeakListDialog.posXY});d(c$,"addUniqueControls",function(){this.txt1=this.dialog.addTextField("txtThreshold","Threshold",null,"","",!0);this.setThreshold(NaN);this.combo1=this.dialog.addSelectOption("cmbInterpolation","Interpolation",["parabolic","none"],0,!0)});e(c$,"callback",function(a,b){if(a.equals("cmbInterpolation")||a.equals("txtThreshold"))a="btnApply";
return this.callbackAD(a,b)},"~S,~S");m(c$,"posXY",[-2147483648,0])});h("JSV.dialog");g(["JSV.dialog.JSVDialog"],"JSV.dialog.MeasurementsDialog",["JSV.common.Annotation"],function(){c$=n(JSV.dialog,"MeasurementsDialog",JSV.dialog.JSVDialog);j(c$,function(){l(this,JSV.dialog.MeasurementsDialog,[]);this.type=JSV.common.Annotation.AType.Measurements});d(c$,"addUniqueControls",function(){});e(c$,"getPosXY",function(){return JSV.dialog.MeasurementsDialog.posXY});e(c$,"callback",function(a,b){return this.callbackAD(a,
b)},"~S,~S");m(c$,"posXY",[-2147483648,0])});h("JSV.dialog");g(["JSV.dialog.JSVDialog"],"JSV.dialog.OverlayLegendDialog",["JSV.common.Annotation"],function(){c$=n(JSV.dialog,"OverlayLegendDialog",JSV.dialog.JSVDialog);j(c$,function(){l(this,JSV.dialog.OverlayLegendDialog,[]);this.type=JSV.common.Annotation.AType.OverlayLegend});e(c$,"getPosXY",function(){return JSV.dialog.OverlayLegendDialog.posXY});d(c$,"addUniqueControls",function(){});e(c$,"callback",function(){return!1},"~S,~S");m(c$,"posXY",
[-2147483648,0])});h("JSV.dialog");g(["JSV.dialog.JSVDialog"],"JSV.dialog.ViewsDialog",["JU.Lst","$.PT","$.SB","JSV.common.Annotation"],function(){c$=q(function(){this.viewSelectedButton=this.combineSelectedButton=this.closeSelectedButton=this.checkBoxes=this.treeNodes=null;this.checking=!1;p(this,arguments)},JSV.dialog,"ViewsDialog",JSV.dialog.JSVDialog);j(c$,function(){l(this,JSV.dialog.ViewsDialog,[]);this.type=JSV.common.Annotation.AType.Views});e(c$,"getPosXY",function(){return JSV.dialog.ViewsDialog.posXY});
d(c$,"addUniqueControls",function(){this.checkBoxes=new JU.Lst;this.treeNodes=new JU.Lst;this.dialog.addButton("btnSelectAll","Select All");this.dialog.addButton("btnSelectNone","Select None");this.txt2=this.dialog.addTextField("txtOffset","Offset",""+this.vwr.parameters.viewOffset,"%",null,!0);this.viewSelectedButton=this.dialog.addButton("btnViewSelected","View Selected");this.combineSelectedButton=this.dialog.addButton("btnCombineSelected","Combine Selected");this.closeSelectedButton=this.dialog.addButton("btnCloseSelected",
"Close Selected");this.dialog.addButton("btnDone","Done");this.dialog.setPreferredSize(500,350);this.txt1=this.dialog.addCheckBox(null,null,0,!1);this.addCheckBoxes(this.vwr.spectraTree.getRootNode(),0,!0);this.addCheckBoxes(this.vwr.spectraTree.getRootNode(),0,!1)});d(c$,"addCheckBoxes",function(a,b,c){for(a=a.children();a.hasMoreElements();){var f=a.nextElement(),k=f.getPanelNode();if(k.isView==c){var d=k.toString();0<=d.indexOf("\n")&&(d=d.substring(0,d.indexOf("\n")));var e="chkBox"+this.treeNodes.size(),
k=this.dialog.addCheckBox(e,d,b,k.isSelected);f.setIndex(this.treeNodes.size());this.treeNodes.addLast(f);this.checkBoxes.addLast(k);this.addCheckBoxes(f,b+1,c)}}},"JSV.api.JSVTreeNode,~N,~B");e(c$,"checkEnables",function(){for(var a=0,b=0;b<this.checkBoxes.size();b++)this.dialog.isSelected(this.checkBoxes.get(b))&&null!=this.treeNodes.get(b).getPanelNode().jsvp&&a++;System.out.println("viewsdialog n="+a);this.dialog.setEnabled(this.closeSelectedButton,0<a);this.dialog.setEnabled(this.combineSelectedButton,
1<a);this.dialog.setEnabled(this.viewSelectedButton,1==a)});d(c$,"check",function(a){var b=JU.PT.parseInt(a.substring(a.indexOf("_")+1));a=this.treeNodes.get(b);var c=this.checkBoxes.get(b),b=this.dialog.isSelected(c);if(null==a.getPanelNode().jsvp){!this.checking&&(b&&this.dialog.getText(c).startsWith("Overlay"))&&(this.checking=!0,this.selectAll(!1),this.dialog.setSelected(c,!0),a.getPanelNode().isSelected=!0,this.checking=!1);for(c=a.children();c.hasMoreElements();){var f=c.nextElement();this.dialog.setSelected(this.checkBoxes.get(f.getIndex()),
b);f.getPanelNode().isSelected=b;a.getPanelNode().isSelected=b}}else a.getPanelNode().isSelected=b;if(b)for(b=this.treeNodes.size();0<=--b;)this.treeNodes.get(b).getPanelNode().isView!=a.getPanelNode().isView&&(this.dialog.setSelected(this.checkBoxes.get(this.treeNodes.get(b).getIndex()),!1),this.treeNodes.get(b).getPanelNode().isSelected=!1);this.checkEnables()},"~S");d(c$,"selectAll",function(a){for(var b=this.checkBoxes.size();0<=--b;)this.dialog.setSelected(this.checkBoxes.get(b),a),this.treeNodes.get(b).getPanelNode().isSelected=
a;this.checkEnables()},"~B");d(c$,"combineSelected",function(){});d(c$,"viewSelected",function(){for(var a=new JU.SB,b=null,c=0,f=0;f<this.checkBoxes.size();f++){var d=this.checkBoxes.get(f),e=this.treeNodes.get(f).getPanelNode();if(this.dialog.isSelected(d)&&null!=e.jsvp){if(e.isView){b=e;c=2;break}c++;d=this.dialog.getText(d);a.append(" ").append(d.substring(0,d.indexOf(":")))}}f=null;1<c&&(this.eventApply(),f="STACKOFFSETY "+this.vwr.parameters.viewOffset);null==b?(this.vwr.execView(a.toString().trim(),
!1),this.layoutDialog()):this.vwr.setNode(b);null!=f&&this.vwr.runScript(f)});d(c$,"closeSelected",function(){this.vwr.runScript("close !selected");this.layoutDialog()});e(c$,"callback",function(a,b){if(a.equals("btnSelectAll"))this.selectAll(!0);else if(a.equals("btnSelectNone"))this.selectAll(!1);else if(a.equals("btnViewSelected"))this.viewSelected();else if(a.equals("btnCombineSelected"))this.viewSelected();else if(a.equals("btnCloseSelected"))this.closeSelected();else if(a.equals("btnDone"))this.viewSelected(),
this.dispose(),this.done();else if(a.equals("txtOffset"))this.eventApply(),this.viewSelected();else if(a.startsWith("chk"))this.checkEnables();else return this.callbackAD(a,b);return!0},"~S,~S");e(c$,"applyFromFields",function(){this.apply([this.dialog.getText(this.txt2)])});m(c$,"posXY",[-2147483648,0])});h("JSV.js2d");g(["JSV.dialog.DialogManager"],"JSV.js2d.JsDialogManager","javajs.awt.Dimension javajs.swing.JDialog $.JEditorPane $.JLabel $.JScrollPane $.JTable JU.PT JSV.js2d.DialogTableModel $.JsDialog".split(" "),
function(){c$=n(JSV.js2d,"JsDialogManager",JSV.dialog.DialogManager);j(c$,function(){l(this,JSV.js2d.JsDialogManager,[])});e(c$,"getDialog",function(a){return new JSV.js2d.JsDialog(this,a,this.registerDialog(a))},"JSV.dialog.JSVDialog");e(c$,"getDialogInput",function(a,b,c,f,d,e,h){return prompt(b,h)},"~O,~S,~S,~N,~O,~A,~S");e(c$,"showMessageDialog",function(a,b){alert(b)},"~O,~S,~S,~N");e(c$,"getLocationOnScreen",function(){return s(2,0)},"~O");e(c$,"getOptionFromDialog",function(a,b,c,f,d){a=-1;
return a=this.vwr.html5Applet.getOption(b,f,d)},"~O,~A,JSV.api.JSVPanel,~S,~S");e(c$,"showProperties",function(a,b){var c=new javajs.swing.JDialog;c.setTitle("Header Information");var f=b.getHeaderRowDataAsArray(),f=new JSV.js2d.DialogTableModel(["Label","Description"],f,!1,!0),f=new javajs.swing.JTable(f);f.setPreferredScrollableViewportSize(new javajs.awt.Dimension(400,195));f=new javajs.swing.JScrollPane(f);c.getContentPane().add(f);c.pack();c.setVisible(!0)},"~O,JSV.common.Spectrum");e(c$,"showMessage",
function(a,b,c){a=new javajs.swing.JDialog;a.manager=this;a.setTitle(c);0<=b.indexOf("</div>")?c=new javajs.swing.JLabel(b):(c=new javajs.swing.JEditorPane,c.setText(b));a.getContentPane().add(c);a.pack();a.setVisible(!0)},"~O,~S,~S");d(c$,"actionPerformed",function(a){var b=a.indexOf("/JT");if(0<=b){var c=a.lastIndexOf("_"),f=a.lastIndexOf("_",c-1),f=JU.PT.parseInt(a.substring(f+1,c)),c=JU.PT.parseInt(a.substring(c+1));this.processTableEvent(a.substring(0,b)+"/ROWCOL",f,c,!1)}else this.processClick(a)},
"~S")});h("JSV.dialog");g(null,"JSV.dialog.DialogManager",["java.util.Hashtable","JU.PT","JSV.common.JSVFileManager"],function(){c$=q(function(){this.options=this.htDialogs=this.htSelectors=this.vwr=null;p(this,arguments)},JSV.dialog,"DialogManager");d(c$,"set",function(a){this.vwr=a;this.htSelectors=new java.util.Hashtable;this.htDialogs=new java.util.Hashtable;return this},"JSV.common.JSViewer");d(c$,"registerDialog",function(a){var b=a.optionKey;b.endsWith("!")||(b+=" "+(""+Math.random()).substring(3));
this.htDialogs.containsKey(b)&&this.htDialogs.get(b).dispose();this.htDialogs.put(b,a);return b},"JSV.dialog.JSVDialog");d(c$,"registerSelector",function(a,b){this.htSelectors.put(b,a)},"~S,~O");d(c$,"getSelectorName",function(a){return this.htSelectors.get(a)},"~O");d(c$,"showSourceErrors",function(a,b){if(null==b)this.showMessageDialog(a,"Please Select a Spectrum.","Select Spectrum",2);else{var c=b.getErrorLog();null!=c&&0<c.length?this.showMessage(a,c,b.getFilePath()):this.showMessageDialog(a,
"No errors found.","Error Log",1)}},"~O,JSV.source.JDXSource");d(c$,"showSource",function(a,b){if(null==b)this.showMessageDialog(a,"Please Select a Spectrum","Select Spectrum",2);else try{var c=JSV.common.JSVFileManager.getFileAsString(b);this.vwr.isJS&&(c=JU.PT.rep(c,"<","&lt;"));this.showMessage(null,c,b)}catch(f){if(r(f,Exception))this.showMessageDialog(a,"File Not Found","SHOWSOURCE",0);else throw f;}},"~O,~S");d(c$,"processClick",function(a){var b=a.lastIndexOf("/"),c=a.substring(b+1);a=a.substring(0,
b);this.dialogCallback(a,c,null)},"~S");d(c$,"processTableEvent",function(a,b,c,f){var d=a.lastIndexOf("/"),e=a.substring(0,d);a="&selector="+a.substring(d+1)+"&index="+b+(0>c?"&adjusting="+f:"&index2="+c);this.dialogCallback(e,"tableSelect",a)},"~S,~N,~N,~B");d(c$,"processWindowClosing",function(a){this.dialogCallback(a,"windowClosing",null);this.htDialogs.remove(a)},"~S");d(c$,"dialogCallback",function(a,b,c){a=this.htDialogs.get(a);null!=a&&a.callback(b,c)},"~S,~S,~S");d(c$,"getDialogOptions",
function(){null==this.options&&(this.options=new java.util.Hashtable);return this.options});m(c$,"PLAIN_MESSAGE",-1,"ERROR_MESSAGE",0,"INFORMATION_MESSAGE",1,"WARNING_MESSAGE",2,"QUESTION_MESSAGE",3)});h("JSV.js2d");g(["javajs.swing.AbstractTableModel"],"JSV.js2d.DialogTableModel",["javajs.api.GenericColor","JU.CU"],function(){c$=q(function(){this.data=this.columnNames=null;this.asString=!1;this.widths=null;this.thisCol=0;this.tableCellAlignLeft=!1;p(this,arguments)},JSV.js2d,"DialogTableModel",null,
javajs.swing.AbstractTableModel);j(c$,function(a,b,c,f){this.columnNames=a;this.data=b;this.asString=c;this.widths=0==b.length?s(0,0):s(b[0].length,0);this.tableCellAlignLeft=f},"~A,~A,~B,~B");d(c$,"getColumnCount",function(){return this.columnNames.length});d(c$,"getRowCount",function(){return this.data.length});d(c$,"getColumnName",function(a){return this.columnNames[a]},"~N");d(c$,"getValueAt",function(a,b){var c=this.data[a][b];return this.asString?" "+c+" ":c},"~N,~N");e(c$,"getColumn",function(a){this.thisCol=
a;return this},"~N");e(c$,"setPreferredWidth",function(a){this.widths[this.thisCol]=a},"~N");e(c$,"toHTML",function(a,b,c){if(!(null==this.data||null==this.data[0]||0==this.data[0].length))for(var f=this.data.length,d=this.columnNames.length,e=-1;e<f;e++){var h=b+"_"+e;a.append("\n<tr id='"+h+"' class='JTable_"+(-1==e?"header":"row")+"' style='height:25px'>");for(var g=0;g<d;g++)-1==e?this.getCellHtml(a,b+"_h"+g,e,g,this.columnNames[g],!1):this.getCellHtml(a,h+"_"+g,e,g,this.data[e][g],c.get(e));
a.append("</tr>")}},"JU.SB,~S,JU.BS");d(c$,"getCellHtml",function(a,b,c,f,d,e){c=this.getCellStyle(b,c,f,d,e);a.append("<td id='"+b+"'"+c+" onclick=SwingController.click(this)>"+d+"</td>")},"JU.SB,~S,~N,~N,~O,~B");d(c$,"getCellStyle",function(a,b,c,f,d){a="padding:1px 1px 1px 1px";0>b?a+=";font-weight:bold":t(f,javajs.api.GenericColor)?a+=";background-color:"+JU.CU.toCSSString(f):(a+=";text-align:",a=this.tableCellAlignLeft?a+"left":0==c?a+"center":a+"right",a+=";border:"+(d?3:1)+"px solid #000");
return" style='"+a+"'"},"~S,~N,~N,~O,~B")});h("JSV.js2d");g(["javajs.swing.JDialog","JSV.api.PlatformDialog","javajs.swing.Insets"],"JSV.js2d.JsDialog","java.util.Hashtable javajs.awt.Color $.Dimension javajs.swing.FlowLayout $.GridBagConstraints $.GridBagLayout $.JButton $.JCheckBox $.JComboBox $.JLabel $.JPanel $.JScrollPane $.JSplitPane $.JTable $.JTextField JSV.common.Annotation JSV.js2d.DialogTableModel".split(" "),function(){c$=q(function(){this.dataTable=this.thisPanel=this.rightPanel=this.mainSplitPane=
this.leftPanel=this.type=this.manager=this.options=this.registryKey=this.optionKey=null;this.iRow=0;this.tableCellAlignLeft=this.haveColors=!1;this.haveTwoPanels=!0;this.panelInsets=this.buttonInsets=null;this.$defaultHeight=350;this.selectedRow=-1;p(this,arguments)},JSV.js2d,"JsDialog",javajs.swing.JDialog,JSV.api.PlatformDialog);u(c$,function(){this.buttonInsets=new javajs.swing.Insets(5,5,5,5);this.panelInsets=new javajs.swing.Insets(0,0,2,2)});j(c$,function(a,b,c){l(this,JSV.js2d.JsDialog);this.manager=
a;this.registryKey=c;this.optionKey=b.optionKey;this.type=b.getAType();this.options=b.options;null==this.options&&(this.options=new java.util.Hashtable);this.getContentPane().setBackground(javajs.awt.Color.get3(230,230,230));this.setFront()},"JSV.dialog.DialogManager,JSV.dialog.JSVDialog,~S");d(c$,"onFocus",function(){this.setFront()});e(c$,"setFocus",function(a){a&&this.setFront()},"~B");d(c$,"setFront",function(){SwingController.setFront(this)});e(c$,"addButton",function(a,b){var c=new javajs.swing.JButton;
c.setPreferredSize(new javajs.awt.Dimension(120,25));c.setText(b);c.setName(this.registryKey+"/"+a);c.addActionListener(this.manager);this.thisPanel.add(c,new javajs.swing.GridBagConstraints(0,this.iRow++,3,1,0,0,10,0,this.buttonInsets,0,0));return c},"~S,~S");e(c$,"addCheckBox",function(a,b,c,f){if(null==a)return this.iRow=0,this.thisPanel=this.rightPanel,null;var d=new javajs.swing.JCheckBox;d.setSelected(f);d.setText(b);d.setName(this.registryKey+"/"+a);d.addActionListener(this.manager);a=new javajs.swing.Insets(0,
20*c,2,2);this.thisPanel.add(d,new javajs.swing.GridBagConstraints(0,this.iRow++,1,1,0,0,17,0,a,0,0));return d},"~S,~S,~N,~B");d(c$,"addPanelLine",function(a,b,c,d){this.thisPanel.add(new javajs.swing.JLabel(null==b?a:b),new javajs.swing.GridBagConstraints(0,this.iRow,1,1,0,0,13,0,this.panelInsets,0,0));null==d?this.thisPanel.add(c,new javajs.swing.GridBagConstraints(1,this.iRow,2,1,0,0,17,0,this.panelInsets,0,0)):(this.thisPanel.add(c,new javajs.swing.GridBagConstraints(1,this.iRow,1,1,0,0,10,0,
this.panelInsets,0,0)),this.thisPanel.add(new javajs.swing.JLabel(d),new javajs.swing.GridBagConstraints(2,this.iRow,1,1,0,0,17,0,this.panelInsets,0,0)));this.iRow++},"~S,~S,javajs.swing.JComponent,~S");e(c$,"addSelectOption",function(a,b,c,d,e){c=new javajs.swing.JComboBox(c);c.setSelectedIndex(d);c.setName(this.registryKey+"/"+a);e&&(c.addActionListener(this.manager),this.addPanelLine(a,b,c,null));return c},"~S,~S,~A,~N,~B");e(c$,"addTextField",function(a,b,c,d,e,g){var h=this.optionKey+"_"+a;null==
c&&(c=this.options.get(h),null==c&&this.options.put(h,c=e));c=new javajs.swing.JTextField(c);c.setName(this.registryKey+"/"+a);g&&(c.setPreferredSize(new javajs.awt.Dimension(45,15)),c.addActionListener(this.manager),this.addPanelLine(a,b,c,d));return c},"~S,~S,~S,~S,~S,~B");e(c$,"createTable",function(a,b,c){try{var d=new javajs.swing.JScrollPane(this.dataTable=this.getDataTable(a,b,c,null==this.leftPanel?this.$defaultHeight:this.leftPanel.getHeight()-50));null==this.mainSplitPane?this.getContentPane().add(d):
this.mainSplitPane.setRightComponent(d)}catch(e){if(!r(e,Exception))throw e;}this.validate();this.repaint()},"~A,~A,~A");e(c$,"endLayout",function(){this.getContentPane().removeAll();this.getContentPane().add(this.mainSplitPane);this.pack()});d(c$,"getDataTable",function(a,b,c){this.selectedRow=-1;a=new JSV.js2d.DialogTableModel(b,a,!this.haveColors,this.tableCellAlignLeft);a=new javajs.swing.JTable(a);var d=a.getSelectionModel();d.addListSelectionListener(this.manager);this.manager.registerSelector(this.registryKey+
"/ROW",d);d=a.getColumnModel().getSelectionModel();d.addListSelectionListener(this.manager);this.manager.registerSelector(this.registryKey+"/COLUMN",d);for(d=0;d<b.length;d++)a.getColumnModel().getColumn(d).setPreferredWidth(c[d]);return a},"~A,~A,~A,~N");e(c$,"getSelectedIndex",function(a){return a.getSelectedIndex()},"~O");e(c$,"getSelectedItem",function(a){return a.getSelectedItem()},"~O");d(c$,"getText",function(a){return a.getText()},"~O");e(c$,"isSelected",function(a){return a.isSelected()},
"~O");e(c$,"selectTableRow",function(a){this.selectedRow=a;this.dataTable.clearSelection();0<=this.selectedRow&&(this.dataTable.setRowSelectionAllowed(!0),this.dataTable.setRowSelectionInterval(this.selectedRow,this.selectedRow+1),this.repaint())},"~N");e(c$,"setCellSelectionEnabled",function(a){this.dataTable.setCellSelectionEnabled(a)},"~B");d(c$,"setEnabled",function(a,b){a.setEnabled(b)},"~O,~B");e(c$,"setIntLocation",function(a){var b=new javajs.awt.Dimension(0,0);SwingController.getScreenDimensions(b);
a[0]=Math.min(b.width-50,a[0]);a[1]=Math.min(b.height-50,a[1]);this.setLocation(a)},"~A");d(c$,"setPreferredSize",function(a,b){this.setPreferredSize(new javajs.awt.Dimension(a,b))},"~N,~N");e(c$,"setSelected",function(a,b){a.setSelected(b)},"~O,~B");e(c$,"setSelectedIndex",function(a,b){a.setSelectedIndex(b)},"~O,~N");d(c$,"setText",function(a,b){a.setText(b)},"~O,~S");e(c$,"startLayout",function(){this.setPreferredSize(new javajs.awt.Dimension(600,370));this.getContentPane().removeAll();this.thisPanel=
this.rightPanel=new javajs.swing.JPanel(new javajs.swing.FlowLayout);switch(this.type){case JSV.common.Annotation.AType.OverlayLegend:this.haveColors=this.tableCellAlignLeft=!0;this.haveTwoPanels=!1;break;case JSV.common.Annotation.AType.Views:this.rightPanel=new javajs.swing.JPanel(new javajs.swing.GridBagLayout)}this.haveTwoPanels&&(this.thisPanel=this.leftPanel=new javajs.swing.JPanel(new javajs.swing.GridBagLayout),this.leftPanel.setMinimumSize(new javajs.awt.Dimension(200,300)),this.mainSplitPane=
new javajs.swing.JSplitPane(1),this.mainSplitPane.setLeftComponent(this.leftPanel),this.mainSplitPane.setRightComponent(new javajs.swing.JScrollPane(this.rightPanel)))});d(c$,"getColumnCentering",function(a){return this.tableCellAlignLeft?2:0==a?0:4},"~N")});h("JSV.api");v(JSV.api,"PlatformDialog")})(Clazz,Clazz.newLongArray,Clazz.doubleToByte,Clazz.doubleToInt,Clazz.doubleToLong,Clazz.declarePackage,Clazz.instanceOf,Clazz.load,Clazz.instantialize,Clazz.decorateAsClass,Clazz.floatToInt,Clazz.floatToLong,
Clazz.makeConstructor,Clazz.defineEnumConstant,Clazz.exceptionOf,Clazz.newIntArray,Clazz.defineStatics,Clazz.newFloatArray,Clazz.declareType,Clazz.prepareFields,Clazz.superConstructor,Clazz.newByteArray,Clazz.declareInterface,Clazz.p0p,Clazz.pu$h,Clazz.newShortArray,Clazz.innerTypeInstance,Clazz.isClassDefined,Clazz.prepareCallback,Clazz.newArray,Clazz.castNullAs,Clazz.floatToShort,Clazz.superCall,Clazz.decorateAsType,Clazz.newBooleanArray,Clazz.newCharArray,Clazz.implementOf,Clazz.newDoubleArray,
Clazz.overrideConstructor,Clazz.clone,Clazz.doubleToShort,Clazz.getInheritedLevel,Clazz.getParamsType,Clazz.isAF,Clazz.isAI,Clazz.isAS,Clazz.isASS,Clazz.isAP,Clazz.isAFloat,Clazz.isAII,Clazz.isAFF,Clazz.isAFFF,Clazz.tryToSearchAndExecute,Clazz.getStackTrace,Clazz.inheritArgs,Clazz.alert,Clazz.defineMethod,Clazz.overrideMethod,Clazz.declareAnonymous,Clazz.cloneFinals);
