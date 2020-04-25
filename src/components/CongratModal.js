import React, {Component} from 'react';

class CongratModal extends Component{
    render(){
        return(
            <div class="modal fade" id="congratModal" role="dialog">
                <div class="modal-dialog">
                    <div class="card">
                        <div class="text-right cross"> <i class="fa fa-times"></i> </div>
                        <div class="card-body text-center"> <img src="https://img.icons8.com/bubbles/200/000000/trophy.png"/>
                            <h4>{this.props.title}</h4>
                            <p>{this.props.message}</p> <button class="btn btn-out btn-square continue">CONTINUE</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CongratModal;