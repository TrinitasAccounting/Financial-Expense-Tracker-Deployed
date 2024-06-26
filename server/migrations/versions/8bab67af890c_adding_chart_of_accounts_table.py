"""adding Chart of Accounts Table

Revision ID: 8bab67af890c
Revises: 84e3cca9a0b6
Create Date: 2024-06-06 14:15:52.292488

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8bab67af890c'
down_revision = '84e3cca9a0b6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('profile', schema=None) as batch_op:
        batch_op.add_column(sa.Column('email', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('profile', schema=None) as batch_op:
        batch_op.drop_column('email')

    # ### end Alembic commands ###
