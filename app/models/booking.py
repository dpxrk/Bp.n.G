from .db import db
from sqlalchemy.orm import relationship


class Booking(db.Models):
  __tablename__ ='bookings'


  id = db.Column(db.Integer, primary_key=True, nullable=False)
  title = db.Column(db.String(250), nullable=False)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  price = db.Column(db.Numeric, nullable=False)
  description = db.Column(db.Text, nullable=False)
  address = db.Column(db.Text, nullable=False)
  createdAt = db.Column(db.DateTime,  default=db.func.current_timestamp())
  updatedAt = db.Column(db.DateTime,  default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())
  pictures = relationship('Picture', back_populates='bookings')


  user = db.relationship('User', backref='bookings')

  def to_dict(self):
    return {
      'id': self.id,
      'title': self.title,
      'userId': self.userId,
      'price': float(self.price),
      'description': self.description,
      'address' : self.address
      'pictures': [picture.photoURL for picture in self.pictures]
    }
