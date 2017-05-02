/**
 * Created by xiaomian on 2017/2/7.
 */
import React from 'react';
import {Table, Popconfirm ,Alert} from 'antd';
import ConstrFormControl from './constrTableControl';

const reqUrl="/platform/constr/alpha";
const addUrl="/platform/constr/alphaAdd";
const deleteUrl="/platform/constr/alphaDelete";
const exeUrl="/platform/constr/alphaExe";
const exeRel="/platform/constr/alphaExeResult";
const pollInterval=60000;

class ConstrTableAlpha extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: 'designId',
            dataIndex: 'designId',
            width: '60%',
        },  {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record, index) => {
                return (
                    this.state.dataSource.length > 0 ? (

                            <Popconfirm title="Sure to delete?" onConfirm={this.onDelete(index)}>
                                <a href="#">Delete</a>
                            </Popconfirm>
                        ) : null
                );
            },
        }];

        this.state = {
            dataSource: [],
            count: 0,
            exeResult:'暂无执行任务',
        };
    }
    componentDidMount=()=>{
        this.loadDesignIdFromServer();
        this.loadExecuteResultFromServer()
        setInterval(this.loadExecuteResultFromServer, pollInterval);
    }
    loadDesignIdFromServer=()=>{
        $.ajax({
            url: reqUrl,
            dataType: 'json',
            type:'GET',
            success: function(data) {
                var dataSource=new Array();
                for (var i=0;i<data.length;i++)
                {
                    dataSource[i]= new Object();
                    dataSource[i].key=String(i);
                    dataSource[i].designId=data[i];

                 }
                this.setState({
                    dataSource: dataSource,
                    count: data.length,
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(reqUrl, status, err.toString());
            }.bind(this)
        });
    }

   loadExecuteResultFromServer=()=>{
       $.ajax({
           url: exeRel,
           contentType: 'text/html; charset=utf-8',
           type:'GET',
           success: function(data) {
               this.setState({
                   exeResult:data,
               });
           }.bind(this),
           error: function(xhr, status, err) {
               console.error(exeRel, status, err.toString());
           }.bind(this)
       });
   }
    onDelete = (index) => {
        return () => {
            const dataSource = [...this.state.dataSource];
            dataSource.splice(index, 1);
            this.setState({ dataSource });
            $.ajax({
                url: deleteUrl,
                contentType: 'application/json; charset=utf-8',
                type:'POST',
                data: this.state.dataSource[index]['designId'],
                error: function(xhr, status, err) {
                    console.error(deleteUrl, status, err.toString());
                }.bind(this)
            });
        };
    }
    handleAdd = (e) => {
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            designId:e,
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
        $.ajax({
            url: addUrl,
            contentType: 'application/json; charset=utf-8',
            type:'POST',
            data: e,
            error: function(xhr, status, err) {
                console.error(addUrl, status, err.toString());
            }.bind(this)
        });
    }

    handleExe=()=>{
        this.setState({
            exeResult:'正在执行',
        });
        var dataSource=new Array();
        for (var i=0;i<this.state.dataSource.length;i++)
        {
            dataSource[i]=this.state.dataSource[i].designId ;
        }
        console.log(dataSource);
        $.ajax({
            url: exeUrl,
            contentType: 'application/json;charset=utf-8',
            type:'POST',
            data:JSON.stringify(dataSource),
            error: function(xhr, status, err) {
                console.error(exeUrl, status, err.toString());
            }.bind(this)
        });
    }

    render() {
        const { dataSource } = this.state;
        const columns = this.columns;
        return (<div>
            <div className="edit-table">
            <ConstrFormControl onDesignIdSubmit={this.handleAdd} onConstrExe={this.handleExe} />
            <Table bordered dataSource={dataSource} columns={columns} className="edit-table-withoutcontrol"/>
            </div>
            <div className="result-alert" >
                <Alert
                    message={this.state.exeResult}
                    type="success"
                />
            </div>
        </div>);
    }
}

export default ConstrTableAlpha;